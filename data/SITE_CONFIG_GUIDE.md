# IEEE CIS Internship Site Configuration Guide

The website is fully data-driven. All textual content, lists, and features are controlled by the `data/site-config.json` file. You can update this file directly to change what appears on the site without needing to modify any React code.

## General Rules

1. **JSON Format**: The file must be valid JSON. Ensure you keep the quotation marks (`"`) around keys and string values.
2. **Help Comments**: Keys starting with `_help_` (e.g., `_help_hero`) are pseudo-comments to guide you. Changing them won't affect the site.
3. **Changing Content**: Only change the values on the right side of the colon (`:`).
4. **Bold Text**: In some fields (like `registration.description`), you can use `**text**` to make words bold.
5. **Adding List Items**: If you need to add a new item to an array (like `topics.items` or `eligibility.criteria`), copy an existing entry (including the curly braces `{}` if it's an object), paste it, and ensure there is a comma (`,`) separating elements.

## Sections Breakdown

### `features`
Turn specific sections of the website on or off by setting values to `true` or `false` (without quotes).
- `showRegistration`: Shows/hides the registration portal and list of candidates.
- `showMentorAllocation`: Shows/hides the mentor allocation list.
- `showTopics`: Shows/hides the topics section.
- `showSchedule`: Shows/hides the schedule section.

### `global`
General settings.
- `contactEmail`: The email address used across the site.

### `navigation`
The links in the top navigation bar. Links will automatically hide if their corresponding feature flag is set to `false`.

### `hero`
The main introductory section at the top of the homepage.

### `about`
Basic information about the internship structure.
- `structure`: Key-value pairs (Mode, Duration, etc.).
- `whyApplyItems`: A list of reasons to apply.

### `topics`
List of topics covered.
- `icon`: Ensure the icon name is a supported React Icon (e.g., `FaBrain`, `FaRobot`).
- `title` & `description`: Details of the topic.

### `eligibility`
Guidelines on who can apply.
- `criteria`, `ineligibleFactors`, `quotas`, `selectionProcess`: Modify the arrays to update the respective lists.

### `schedule`
The timeline of events.
- `isActive`: Set to `true` when a specific event is currently active or completed, or to highlight it.

### `registration`
Registration portal details.
- `selectedCandidates`: An array of objects `{"name": "...", "institution": "..."}`. Add candidates here when they are selected.

### `mentorAllocation`
Mentor mapping.
- `guidelines`: Rules and details. Set `isList` to `true` and populate `listItems` if you want a bulleted list.
- `allocations`: An array mapping students to mentors. Format: `{"name": "...", "institution": "...", "internshipInstitution": "...", "mentorName": "...", "mentorEmail": "..."}`. Add allocations here when ready.

### `contact`
Contact action bar details at the bottom of the page.
