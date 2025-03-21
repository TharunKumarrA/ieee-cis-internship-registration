'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClock, FaMoneyBillWave, FaUserGraduate, FaUpload } from 'react-icons/fa';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiExclamationCircle } from 'react-icons/hi';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJVQ3Uwlfy_COKhPWedzDiS2gpbPufS2E",
  authDomain: "ieee-cis-162c4.firebaseapp.com",
  projectId: "ieee-cis-162c4",
  storageBucket: "ieee-cis-162c4.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "721954420887",
  appId: "1:721954420887:web:2c41ceff34ec3f33e9d1d2",
  measurementId: "G-DC37GVLZM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Define form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  institution: z.string().min(1, "Please select your institution"),
  otherInstitution: z.string().optional(),
  degree: z.string().min(1, "Please select your degree"),
  yearOfStudy: z.string().min(1, "Please select your current year of study"),
  department: z.string().min(2, "Please enter your department"),
  firstPreference: z.string().min(1, "Please select your first preference"),
  secondPreference: z.string().min(1, "Please select your second preference"),
  thirdPreference: z.string().min(1, "Please select your third preference"),
  cgpa: z.string()
    .refine(
      (value) => {
        const num = parseFloat(value);
        return !isNaN(num) && num >= 0 && num <= 10;
      },
      { message: "CGPA must be between 0 and 10" }
    ),
  priorExperience: z.string().optional(),
  statementOfPurpose: z.string().min(50, "Statement of purpose must be at least 50 characters"),
  projectIdeas: z.string().optional(),
  heardFrom: z.string().min(1, "Please tell us how you heard about the program"),
  paymentScreenshot: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, "Payment screenshot is required")
    .refine(
      (files) => {
        const file = files[0];
        return file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg");
      },
      "Image must be JPG, JPEG, or PNG"
    )
    .refine((files) => files[0]?.size <= 5 * 1024 * 1024, "Image must be less than 5MB")
});

type FormData = z.infer<typeof formSchema>;

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur"
  });
  
  const selectedInstitution = watch("institution");

  const onSubmit = async (data: FormData) => {
    try {
      setSubmissionError(null);
      
      // 1. Upload payment screenshot to Firebase Storage
      const paymentFile = data.paymentScreenshot[0];
      const fileName = `payment_screenshots/${Date.now()}_${paymentFile.name}`;
      const storageRef = ref(storage, fileName);
      
      const snapshot = await uploadBytes(storageRef, paymentFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      // 2. Prepare data for Firestore (remove the file object and add URL)
      const submissionData = {
        ...data,
        paymentScreenshot: downloadURL,
        submittedAt: serverTimestamp(),
        status: "pending" // For tracking application status
      };
      
      // 3. Save to Firestore
      await addDoc(collection(db, "registrations"), submissionData);
      
      // 4. Update UI state
      setIsSubmitted(true);
      reset();
      
      // 5. Optional: Send confirmation email (would require backend service)
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError("There was an error submitting your registration. Please try again or contact support.");
    }
  };

  const institutions = [
    { value: "", label: "Select your institution" },
    { value: "cochin_university", label: "Cochin University of Science and Technology" },
    { value: "nitc", label: "National Institute of Technology, Calicut" },
    { value: "amrita", label: "Amrita Vishwa Vidyapeetham" },
    { value: "other", label: "Other" }
  ];

  const degrees = [
    { value: "", label: "Select your degree" },
    { value: "btech", label: "B.Tech" },
    { value: "mtech", label: "M.Tech" },
    { value: "bca", label: "BCA" },
    { value: "mca", label: "MCA" },
    { value: "bsc", label: "B.Sc" },
    { value: "msc", label: "M.Sc" },
    { value: "phd", label: "Ph.D" }
  ];

  const yearOptions = [
    { value: "", label: "Select year" },
    { value: "1", label: "1st Year" },
    { value: "2", label: "2nd Year" },
    { value: "3", label: "3rd Year" },
    { value: "4", label: "4th Year" }
  ];

  const topicPreferences = [
    { value: "", label: "Select topic" },
    { value: "machine_learning", label: "Machine Learning" },
    { value: "artificial_intelligence", label: "Artificial Intelligence" },
    { value: "edge_ai", label: "Edge AI" },
    { value: "nlp", label: "Natural Language Processing" },
    { value: "iot", label: "Internet of Things" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "data_analytics", label: "Data Analytics" },
    { value: "big_data", label: "Big Data" },
    { value: "computational_biology", label: "Computational Biology" }
  ];

  const heardFromOptions = [
    { value: "", label: "Select option" },
    { value: "ieee_website", label: "IEEE Website" },
    { value: "social_media", label: "Social Media" },
    { value: "college", label: "College/University" },
    { value: "professor", label: "Professor/Faculty" },
    { value: "friend", label: "Friend/Colleague" },
    { value: "email", label: "Email Newsletter" },
    { value: "other", label: "Other" }
  ];

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ieee-blue mb-2">Registration & Fees</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure your spot in this prestigious internship program by completing the registration process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-ieee-light rounded-lg p-6 shadow-ieee border-l-4 border-ieee-blue mb-6">
              <h3 className="text-2xl font-bold text-ieee-dark mb-4">Registration Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-ieee-blue">
                    <FaMoneyBillWave size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-ieee-dark">Registration Fee</h4>
                    <p className="text-gray-600">₹1000 (Includes course materials, certification, and project mentorship)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-ieee-blue">
                    <FaClock size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-ieee-dark">Registration Deadline</h4>
                    <p className="text-gray-600">May 10, 2025 (11:59 PM IST)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-ieee-blue">
                    <FaUserGraduate size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-ieee-dark">Required Documents</h4>
                    <p className="text-gray-600">Resume/CV, Academic transcripts, Statement of purpose (300 words)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-ieee border border-ieee-blue/20">
              {/* <h4 className="font-bold text-ieee-dark mb-2">IEEE Member Benefit</h4>
              <p className="text-gray-600 mb-4">IEEE members receive a 20% discount on the registration fee. Valid IEEE membership ID required during registration.</p> */}
              
              <div className="bg-ieee-light p-3 rounded-md border border-ieee-blue/20">
                <p className="text-sm font-medium text-ieee-dark">Not an IEEE member yet? <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="text-ieee-blue hover:underline">Join now</a> to access this and many other benefits.</p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-ieee border-l-4 border-ieee-blue mt-6 mb-12"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-ieee-blue">
                  <FaMoneyBillWave size={22} />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-ieee-dark text-lg mb-2">Payment Instructions</h4>
                  <p className="text-gray-600 mb-4">Please complete the payment using the UPI ID below and upload the screenshot in the registration form.</p>
                </div>
              </div>
              
              <div className="mt-4 bg-gradient-to-r from-ieee-light to-white p-5 rounded-md border border-ieee-blue/20 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-3 md:mb-0">
                    <p className="text-gray-700 text-sm uppercase font-semibold tracking-wide">UPI Payment ID:</p>
                    <div className="flex items-center mt-1">
                      <span className="font-mono text-xl font-medium text-ieee-blue">ieeeciskerala@ybl</span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText("ieeeciskerala@ybl");
                          alert("UPI ID copied to clipboard!");
                        }} 
                        className="ml-2 text-ieee-blue hover:text-ieee-dark transition-colors p-1 rounded-full hover:bg-ieee-light/50"
                        title="Copy to clipboard"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-ieee-blue text-white py-2 px-4 rounded-md shadow-sm"
                  >
                    <p className="font-bold">₹1000</p>
                    <p className="text-sm text-white/80">Registration Fee</p>
                  </motion.div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 opacity-10">
                  <svg className="h-full w-full text-ieee-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 14V6C19 4.9 18.1 4 17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13Z" fill="currentColor"/>
                    <path d="M23 7V18C23 19.1 22.1 20 21 20H7C6.9 20 6.8 19.99 6.7 19.98L9.83 16.88C9.94 16.77 10.09 16.76 10.22 16.87C10.45 17.06 10.71 17.21 11 17.3V18H21V7H19.9C19.97 7.32 20 7.66 20 8C20 10.76 17.76 13 15 13C14.01 13 13.1 12.71 12.34 12.22C12.23 12.15 12.1 12.14 11.99 12.2L8.45 14.4L8.28 14.54C7.67 15.04 6.76 14.96 6.24 14.35C5.63 13.59 5.96 12.43 6.9 12.04L10.5 10.31C10.65 10.24 10.82 10.25 10.95 10.35C12.12 11.22 13.53 11.73 15 11.73C17.06 11.73 18.76 10.37 19.14 8.53C19.16 8.42 19.06 8.33 18.95 8.33H13.59C13.27 8.33 13.03 8.03 13.1 7.72C13.22 7.21 13.72 6.95 14.19 7.13L16.95 8.37C17.06 8.43 17.2 8.37 17.25 8.26C17.33 8.09 17.38 7.9 17.41 7.71C17.43 7.6 17.36 7.5 17.25 7.47L12.5 5.39C12.39 5.34 12.27 5.36 12.17 5.43C11.72 5.73 11.17 5.57 10.92 5.16C10.64 4.71 10.81 4.1 11.3 3.88L15.8 2.02C16.12 1.88 16.5 1.86 16.82 1.98L22.5 4C22.81 4.12 23 4.41 23 4.74V5.77C23 6.29 22.65 6.75 22.13 6.85L21.67 6.94C21.33 7.02 21.1 7.33 21.1 7.68V7C21.1 7 21.1 7 21 7H23Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">After payment, don't forget to upload the screenshot in the registration form</p>
              </div>
            </motion.div>
            
            {/* Additional information about payment process */}
            <div className="bg-white rounded-lg p-6 shadow-ieee border border-ieee-blue/10 mt-6 mb-12">
              <h4 className="font-bold text-ieee-dark text-lg mb-3">Payment Process</h4>
              
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>Open your preferred UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
                <li>Select the "Send Money" or "Pay" option</li>
                <li>Enter the UPI ID: <span className="font-mono font-medium">ieeeciskerala@ybl</span></li>
                <li>Enter the amount: <span className="font-semibold">₹1000</span></li>
                <li>Add your name and registration purpose in the note/description</li>
                <li>Complete the payment</li>
                <li>Take a screenshot of the successful payment confirmation</li>
                <li>Upload the screenshot in the registration form</li>
              </ol>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-md border-l-4 border-yellow-400">
                <p className="text-yellow-800 font-medium">Important Note</p>
                <p className="text-sm text-yellow-700 mt-1">Applications without valid payment proof will not be considered. If you face any issues with the payment process, please contact us at <a href="mailto:ieeecisinternship@gmail.com" className="text-ieee-blue underline">ieeecisinternship@gmail.com</a></p>
              </div>
            </div>
            
            {/* Frequently Asked Questions */}
            <div className="bg-white rounded-lg p-6 shadow-ieee border border-ieee-blue/10 mt-6 mb-20">
              <h4 className="font-bold text-ieee-dark text-lg mb-4">Frequently Asked Questions</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-ieee-dark">Is the fee refundable if I am not selected?</h5>
                  <p className="text-gray-600 mt-1">Yes, the registration fee is fully refundable if you are not selected for the internship program.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-ieee-dark">When will I know if I am selected?</h5>
                  <p className="text-gray-600 mt-1">Selection results will be announced by May 25, 2025. All applicants will be notified via email.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-ieee-dark">What are the selection criteria?</h5>
                  <p className="text-gray-600 mt-1">Selection is based on academic performance, relevant experience, statement of purpose, and availability of seats in your preferred topic areas.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-ieee-dark">Can I apply for multiple topics?</h5>
                  <p className="text-gray-600 mt-1">Yes, you can select up to three topic preferences in order of priority. We will try to accommodate your preferences based on availability.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-ieee-dark">Is there any discount for IEEE members?</h5>
                  <p className="text-gray-600 mt-1">IEEE members receive priority in the selection process. Please ensure you mention your IEEE membership ID in the application if applicable.</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">If you have any other questions, please contact us through the form in the Contact section below.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Registration Submitted!</h3>
                <p className="text-gray-700 mb-6">Thank you for registering for the IEEE CIS Kerala Section Summer Internship Program 2025. We have received your application and will review it shortly.</p>
                <p className="text-gray-700 mb-6">A confirmation email has been sent to your registered email address with further instructions.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-ieee-blue hover:bg-ieee-blue/90 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Register Another Applicant
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-ieee border border-ieee-blue/20">
                <h3 className="text-2xl font-bold text-ieee-dark mb-6">Registration Form</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-ieee-dark border-b border-gray-200 pb-2">Personal Information</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your first name"
                          {...register("firstName")}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your last name"
                          {...register("lastName")}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                        <input 
                          type="email" 
                          id="email" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="your.email@example.com"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your phone number"
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Academic Information Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-ieee-dark border-b border-gray-200 pb-2">Academic Information</h4>
                    
                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution*</label>
                      <select 
                        id="institution" 
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.institution ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("institution")}
                      >
                        {institutions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.institution && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="mr-1" />
                          {errors.institution.message}
                        </p>
                      )}
                    </div>
                    
                    {selectedInstitution === "other" && (
                      <div>
                        <label htmlFor="otherInstitution" className="block text-sm font-medium text-gray-700 mb-1">Specify Institution*</label>
                        <input 
                          type="text" 
                          id="otherInstitution" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.otherInstitution ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your institution name"
                          {...register("otherInstitution")}
                        />
                        {errors.otherInstitution && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.otherInstitution.message}
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">Degree*</label>
                        <select 
                          id="degree" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.degree ? 'border-red-500' : 'border-gray-300'}`}
                          {...register("degree")}
                        >
                          {degrees.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        {errors.degree && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.degree.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700 mb-1">Year of Study*</label>
                        <select 
                          id="yearOfStudy" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.yearOfStudy ? 'border-red-500' : 'border-gray-300'}`}
                          {...register("yearOfStudy")}
                        >
                          {yearOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        {errors.yearOfStudy && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.yearOfStudy.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department*</label>
                        <input 
                          type="text" 
                          id="department" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.department ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="e.g., Computer Science, Electronics"
                          {...register("department")}
                        />
                        {errors.department && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.department.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700 mb-1">CGPA (out of 10)*</label>
                        <input 
                          type="text" 
                          id="cgpa" 
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.cgpa ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="e.g., 8.5"
                          {...register("cgpa")}
                        />
                        {errors.cgpa && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <HiExclamationCircle className="mr-1" />
                            {errors.cgpa.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Topic Preferences Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-ieee-dark border-b border-gray-200 pb-2">Topic Preferences</h4>
                    
                    <div>
                      <label htmlFor="firstPreference" className="block text-sm font-medium text-gray-700 mb-1">First Preference*</label>
                      <select 
                        id="firstPreference" 
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.firstPreference ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("firstPreference")}
                      >
                        {topicPreferences.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.firstPreference && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="mr-1" />
                          {errors.firstPreference.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="secondPreference" className="block text-sm font-medium text-gray-700 mb-1">Second Preference*</label>
                      <select 
                        id="secondPreference" 
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.secondPreference ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("secondPreference")}
                      >
                        {topicPreferences.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.secondPreference && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="mr-1" />
                          {errors.secondPreference.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="thirdPreference" className="block text-sm font-medium text-gray-700 mb-1">Third Preference*</label>
                      <select 
                        id="thirdPreference" 
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.thirdPreference ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("thirdPreference")}
                      >
                        {topicPreferences.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.thirdPreference && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="mr-1" />
                          {errors.thirdPreference.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Additional Information Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-ieee-dark border-b border-gray-200 pb-2">Additional Information</h4>
                    
                    <div>
                      <label htmlFor="priorExperience" className="block text-sm font-medium text-gray-700 mb-1">Prior Experience (if any)</label>
                      <textarea 
                        id="priorExperience" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                        placeholder="Describe any prior experience in AI/ML or related fields"
                        rows={3}
                        {...register("priorExperience")}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="statementOfPurpose" className="block text-sm font-medium text-gray-700 mb-1">Statement of Purpose*</label>
                      <textarea 
                        id="statementOfPurpose" 
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.statementOfPurpose ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Why are you interested in this program and what do you hope to achieve? (min. 50 characters)"
                        rows={5}
                        {...register("statementOfPurpose")}
                      />
                      {errors.statementOfPurpose && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="mr-1" />
                          {errors.statementOfPurpose.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="projectIdeas" className="block text-sm font-medium text-gray-700 mb-1">Project Ideas (if any)</label>
                      <textarea 
                        id="projectIdeas" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                        placeholder="Do you have any specific project ideas you'd like to work on during the internship?"
                        rows={3}
                        {...register("projectIdeas")}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="heardFrom" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?*</label>
                      <select 
                        id="heardFrom" 
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ieee-blue focus:border-transparent ${errors.heardFrom ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("heardFrom")}
                      >
                        {heardFromOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.heardFrom && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="mr-1" />
                          {errors.heardFrom.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Payment Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-ieee-dark border-b border-gray-200 pb-2">Payment Verification</h4>
                    
                    <div className="bg-ieee-light p-4 rounded-md border border-ieee-blue/20 mb-4">
                      <p className="text-gray-700 mb-2">Please make a payment of <span className="font-bold">₹1000</span> to the UPI ID: <span className="font-mono font-medium">ieeeciskerala@ybl</span></p>
                      <p className="text-gray-700">After completing the payment, upload a screenshot below as proof of payment.</p>
                    </div>
                    
                    <div>
                      <label htmlFor="paymentScreenshot" className="block text-sm font-medium text-gray-700 mb-1">Payment Screenshot*</label>
                      <div className={`border-2 border-dashed rounded-md p-4 text-center ${errors.paymentScreenshot ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-ieee-blue'}`}>
                        <input
                          type="file"
                          id="paymentScreenshot"
                          className="hidden"
                          accept="image/jpeg,image/png,image/jpg"
                          {...register("paymentScreenshot")}
                        />
                        <label htmlFor="paymentScreenshot" className="cursor-pointer">
                          <div className="space-y-1">
                            <div className="mx-auto flex justify-center">
                              <FaUpload className="h-7 w-7 text-gray-400" />
                            </div>
                            <div className="text-sm text-gray-700">
                              <span className="font-medium text-ieee-blue hover:underline">Click to upload</span> or drag and drop
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, JPEG up to 5MB
                            </p>
                          </div>
                        </label>
                      </div>
                      {errors.paymentScreenshot && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="mr-1" />
                          {errors.paymentScreenshot.message?.toString()}
                        </p>
                      )}
                      
                      {watch("paymentScreenshot")?.[0] && (
                        <div className="mt-2 flex items-center space-x-2">
                          <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">
                            <img 
                              src={URL.createObjectURL(watch("paymentScreenshot")[0])} 
                              alt="Payment screenshot preview" 
                              className="max-h-full max-w-full object-cover rounded-md"
                            />
                          </div>
                          <div className="text-sm text-gray-700">
                            {watch("paymentScreenshot")[0].name}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Terms and Submit */}
                  <div className="pt-4">
                    <div className="bg-ieee-light rounded-md p-4 mb-6">
                      <p className="text-sm text-gray-700">
                        By submitting this form, you confirm that all information provided is accurate and complete. 
                        You also agree to the terms and conditions of the IEEE CIS Kerala Section Summer Internship Program 2025.
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-ieee-blue hover:bg-ieee-blue/90 text-ieee-light-blue font-bold rounded-md shadow transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-ieee-light-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {isSubmitting ? "Uploading files..." : "Processing..."}
                        </>
                      ) : (
                        "Submit Registration"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

