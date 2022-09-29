---
title: Accessibility success criteria
description: Accessibility success criteria
layout: ../layouts/MainLayout.astro
---

As an organisation, we have a [legal obligation](https://cielo24.com/2016/12/uk-web-accessibility-law/) to ensure the digital products and services we produce are accessible to anyone who requires them.

The list below covers the success criteria to meet certain levels (A, AA or AAA) across a range of principles. For a more detailed overview of what accessibility is and how we can implement accessible features, read [our guidance and best practice](666501133.html) or visit the [WCAG website](https://www.w3.org/WAI/fundamentals/accessibility-intro/). 

WCAG 2.1
--------

[https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/)

**WCAG**

**Feature**

**Level**

**Success Criteria**

**Covered by**

**Perceivable**
---------------

Information and UI components must be presentable to users in ways they can understand.

1.1.1

Non-text-content

A

Non-text content should have a text alternative that serves the equivalent purpose, except for the following cases:

*   Controls and inputs that accept user input should have a name that describes its purpose
    
*   Time based media should at least provide descriptive identification of the non-text-content
    
*   Captcha’s should be identified and alternative forms of captcha provided to accommodate different disabilities
    
*   Purely decorative content should be implemented in a way that is ignored by assistive technologies
    

Developers, Content Designers/Editors

**Time-based media**
--------------------

Alternatives to time-based media should be provided

1.2.1

Time based media (audio, video)

A

An alternative to time-based media should be provided that presents equivalent information

Video/Creative

1.2.2

A

Captions should be provided for prerecorded audio content

Video/Creative

1.2.3

A

Audio descriptions should be provided for prerecorded video content

Video/Creative

**Adaptable**
-------------

It should be possible to present content in different ways without losing information or structure

1.3.1

Info and relationships

A

Information, structure and relationships conveyed through presentation should be available in text or implemented in a way that assistive technologies can understand

Content Designers/Editors, Developers and UX

1.3.2

Meaningful sequence

A

Screen-readers should follow a meaningful reading sequence 

Developers (with aid by UX)

1.3.3

Sensory characteristics

A

Instructions provided for understanding or operating content should not rely solely on sensory characteristics of components such as:

*   Shape
    
*   Colour
    
*   Size
    
*   Visual location
    
*   Orientation
    
*   Sound
    

UX and Content Designers/Editors

1.3.4

Orientation

AA

The visibility or operation of content should not be restricted to a single display orientation

Developers

1.3.5

Inputs

AA

Input fields that collect information about the user should be implemented in a way that assistive technologies can identify their purpose

Developers (+ UX for design)

1.3.6

UI components and icons

AAA

UI components, icons and regions should be implemented in a way that assistive technologies can identify their purpose

Developers (+UX and Creative to supply icons)

**Distinguishable**
-------------------

It should be easy for users to distinguish content, including separating foreground from background

1.4.3, 1.4.6

Text/ Typography

AA, AAA

Text should have a contrast ratio of at least 4.5:1 (AA) or 7:1 (AAA), except for the following cases:

*   Large-scale text can have a contrast ratio of 3:1 (AA) or 4.5:1 (AAA)
    
*   Text that is part of an inactive UI component that is purely decorative
    
*   Text that is part of a logo or brand name
    

UX

1.4.4

AA

Content should retain meaning when magnified to 200%

Developers (handled in build)

1.4.5

AA

Images of text should be avoided with no exception unless technologies being used cannot achieve the visual presentation. In which case only used for pure decoration or where a particular presentation of text is essential to the information being conveyed

Creative (but enforced by all disciplines)

1.4.8

AAA

Blocks of text should:

*   Have a mechanism to allow foreground and background colours to be selected by the user
    
*   Be no more than 80 characters in width
    
*   Not be justified
    
*   Have line-spacing of at least a space-and-a-half within paragraphs, and paragraph spacing at least 1.5 larger than line spacing
    
*   Allow for text to be resized without assistive technology up to 200% in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window
    

1.4.12

AA

*   Line height (line spacing) should be at least 1.5 times the font size
    
*   Spacing following paragraphs should be at least 2 times the font size
    
*   Letter spacing (tracking) should be at least 0.12 times the font size
    
*   Word spacing should be at least 0.16 times the font size
    

UX

1.4.13

Additional content shown on hover/focus

AA

*   A mechanism should be available to dismiss additional content without moving pointer hover or keyboard focus
    
*   Additional content should not obscure or replace other content, unless the additional content indicates an input error
    
*   Additional content shown on hover should remain open when the pointer is moved over it
    
*   Additional content should remain visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid
    

Developers (with aid by UX)

**Operable**
------------

User interface components and navigation must be operable

2.1.1

Keyboard

A

All functionality should be available through keyboard input

Developers

2.1.2

A

There should be no keyboard traps

Developers

**Enough time**
---------------

Provide users enough time to read and use content

2.2.1

Timed content

A

Users should be provided enough time to read content

UX

For each time limit set on content at least one of the following should be available:

*   Turn off time limit
    
*   Adjust time limit
    
*   Extend time limit
    

Exceptions:

*   Real-time events i.e. auctions
    
*   Time limit is essential
    
*   The time limit is longer than 20 hours
    

2.2.2

Moving, blinking, scrolling or auto-updating content

A

For any moving, blinking or scrolling information that

*   starts automatically
    
*   lasts more than five seconds
    
*   is presented in parallel with other content
    

there should be a mechanism for the user to pause, stop, or hide it, unless it is essential.

For any auto-updating information that

*   starts automatically
    
*   is presented in parallel with other content
    

there should be a mechanism for the user to pause, stop, or hide it or to control the frequency of the update, unless the auto-updating is essential

UX & Creative (with aid of Developers)

2.2.3

Timing of interaction

AAA

Content that requires timed interaction should not be an essential part of the activity presented to the user, except for non-interactive synchronised media and real-time events

2.2.4

Interruptions

AAA

Interruptions, such as updates from the author/server, can be postponed or suppressed by the user, except interruptions involving an emergency

2.2.5

Data persistence

AAA

When an authentication session expires, the user should be able to continue the activity without loss of data after re-authenticating

2.2.6

AAA

Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours

**Seizures and Physical reactions**
-----------------------------------

Do not design content in a way that is known to cause seizures or physical reactions

2.3.1, 2.3.2

Physical reactions/Seizures

A, AA

Web pages should not contain anything that flashes more than three times in any one second period

Creative, UX and Developers

2.3.3

AAA

It should be possible to disable any motion animation triggered by interaction

**Navigable**
-------------

Provide ways to help users navigate, find content, and determine where they are

2.4.1

Navigable

A

A mechanism should be available to bypass blocks of content that are repeated on multiple pages

Developers

2.4.2

A

Web pages should have titles that describe their topic or purpose

Content Designers/Editors

2.4.3

A

Focusable components receive focus in an order that preserves meaning and operability

Developers (aided by UX)

2.4.4

A

It should be possible to determine the purpose of each link from the link text alone

Content Designers/Editors

2.4.5

AA

More than one way is available to locate a webpage within a set of web pages. Except where the web page is the result of, or a step in, a process

See comment

2.4.6

AA

Headings and labels should describe their topic or purpose

Content Designers/Editors & UX

2.4.7

AA

Keyboard focus indicator should be visible

Developers & UX (See comment)

2.4.8

AAA

Information about the user’s location within a set of web pages is available

2.4.9

AAA

Each link should be identifiable by its link text alone

2.4.10

AAA

Section headings and titles are used to organise the content

**Input Modalities**
--------------------

Make it easier for users to operate functionality through various inputs beyond keyboard

2.5.1

Pointer gestures

A

All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential

Developers

2.5.2

A

For functionality that can be operated using a single pointer, at least one of the following should be true:

*   The down event (touch-start/ mouse-down) should not be used to execute any part of the function
    
*   Completion of the function is on the up-event (touch-end/ mouse-up), and a mechanism is available to abort the function before completion or undo the function after completion
    
*   The up event should reverse any outcome of the preceding up event
    
*   Completing the function on the down event is essential
    

Developers

2.5.3

Labels

A

For UI components that have labels, such as input fields, their HTML _name_ attribute should contain the same text that is presented visually

Developers & Content Designers/Editors

2.5.5

Buttons

AAA

The size of targets should be at least 44x44px (or equivalent), except when:

*   The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels
    
*   The target is in a sentence or block of text
    
*   A particular presentation of the target is essential to the information being conveyed
    

2.5.6

Input mechanisms

AAA

Web content should not restrict a user's input mechanisms, except when restriction is:

*   Essential
    
*   Required to ensure security
    
*   Required to respect user settings
    

**Readable**
------------

Make text content readable and understandable.

3.1.1

Language

A

The default human language of each page should be programmatically determined in a way that assistive technologies understand

Developers

3.1.2

AA

The human language of each passage or phrase should be programmatically determined in a way that assistive technologies understand, except for:

*   Proper names
    
*   Technical terms
    
*   Words of indeterminate language
    
*   Words or phrases that have become a part of the vernacular of the immediately surrounding text
    

See comment

3.1.3

AAA

A mechanism should be available for identifying specific definitions of words or phrases

3.1.4

AAA

A mechanism should be available for expanding meaning of abbreviations

**Predictable**
---------------

Make Web pages appear and operate in predictable ways

3.2.1

On focus

A

When a UI component receives focus, it should not cause a major change in the content of the web page

Developers (checked by UX/QA)

3.2.2

On input

A

Changing the setting of any UI component should not cause a major change in the content of the web page, unless the user has been advised of the behaviour before using the component

See comment

3.2.3

Consistent navigation

AA

Navigation mechanisms should be consistent across all pages

UX & Developers

3.2.4

Consistent components

AA

Components that have the same functionality should be identified consistently across all pages

UX & Developers (refer to up to date Pattern Library)

3.2.5

Content changes on request

AAA

Major changes in the content of the web page are initiated only by the user request or a mechanism is available to turn off such changes

3.3.1

Error identification

A

If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text

UX, Content Designers/Editors, Developers

3.3.2

Labels

A

Content that requires user input should have labels or instructions

Content Designers/Editors & UX

3.3.3

Error suggestions

AA

If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardise the security or purpose of the content

UX & Content Designers/Editors (implemented by Developers)

3.3.4, 3.3.6

Error prevention

AA, AAA

At least one of the following should be true…  
(AA) For Web pages that:

*   cause legal commitments or financial transactions
    
*   modify or delete user-controllable data
    
*   submit user test responses
    

(AAA) For all Web pages that require the user to submit information…

*   Submissions should be reversible
    
*   User inputted data should be validated and the user provided an opportunity to correct them
    
*   A mechanism should be available for reviewing, confirming, and correcting information before finalising the submission
    

Developers

3.3.5

Help

AAA

Help text that provides information related to the function currently being performed should be available

**Robust**
----------

Content must be robust and compatible enough that it can be interpreted by a wide variety of current and future user agents, including assistive technologies

4.1.1

Markup

A

Markup should be valid and well formed. Except where the specifications allow these features, elements should:

*   have complete start and end tags
    
*   be nested according to their specifications
    
*   not contain duplicate attributes
    
*   have unique ID's
    

Developers

4.1.2

A

The name and role should be programmatically determined for each UI component.

Developers & UX

4.1.3

Status Messages

AA

Status messages should be presented to the user by assistive technology without receiving focus i.e. using role

Developers & UX

Other accessibility guides
--------------------------

![](images/icons/grey_arrow_down.png)Shelter’s accessibility guidance and best practices

1 in 5 people in the UK have a disability. Web accessibility ensures they face no barriers to using our websites and content. This guide explains the types of disabilities, audience volume, legal requirements and how to create a roadmap to accessibility for a digital product or service. [Read the guide](/wiki/pages/createpage.action?spaceKey=GTS&title=Shelter%E2%80%99s%20Accessibility%20Guidance%20%26%20Best%20Practices&linkCreation=true&fromPageId=824410212)

![](images/icons/grey_arrow_down.png)Writing for accessibility

Editorial skills play a big part in removing barriers for users with disabilities. They include writing in plain language, using accessibility best practice for headings, links, and non-text content, and much more. Read our [guide to writing for accessibility](Writing-accessible-content_839516226.html).

![](images/icons/grey_arrow_down.png)Social media guidance

Shelter’s social channels are vital to our ability to reach people facing homelessness or experiencing bad housing, as well as appeal to people hoping to support our work. It’s crucial that our social content is accessible, and [this guide explains the best practices](Social-media-and-accessibility_842596355.html).

* * *

Related
-------

Read our other [content guides](https://shelteruk.atlassian.net/wiki/spaces/GTS/pages/442138636)

Read our [brand guidelines](https://shelteruk.atlassian.net/wiki/spaces/GTS/pages/760676531)

* * *

Contact us
----------

Have a question or comment about accessibility or other digital topic? Found a bug? Or maybe you’d like to contribute to the framework? [Use our contact form](https://england.shelter.org.uk/contact_us_about_the_digital_framework) to get in touch.
