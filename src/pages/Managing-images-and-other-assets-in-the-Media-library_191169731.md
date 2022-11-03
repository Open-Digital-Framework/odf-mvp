---
title: Managing images and other assets in the Media library
description: Managing images and other assets in the Media library
layout: ../layouts/MainLayout.astro
---

Contentful’s Media library is where we store images and downloadables for use in our websites. Each space (England and Scotland) has its own library.

**Asset types and file formats it accepts:**

- **Presentation** – PPTX
- **Images** - JPG, PNG, GIF, SVG, TIFF (always use JPG for photographic images and GIF for non-photographic uses like logos. Please convert all PNG files to JPG.)
- **Audio** – MP3, WAV, AAC
- **Rich text** – Word .doc, RTF
- **PDF**
- **Video** – MP4 and OGV (the format we use for background videos such as on the [Vertical Rush page](https://england.shelter.org.uk/support_us/events/charity_challenge/vertical_rush). But for all other video please use a streaming service (YouTube, Vimeo) and Contentful’s [video embed component](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191170966/Video+embed+component) .
- **Spreadsheet** - .xls, .csv

## **Finding assets**

![](attachments/191169731/191267235.png?width=680)

Contentful’s media library has the same search behavior as the main Content section. You can:

- **search by file type** – select a type in the left sidebar to add the **Type** dropdown to the search field
- **search by keyword** – Contentful searches files names and descriptions
- **filter your search** by a range of criteria – file size, date uploaded, who uploaded it and more
- **save a search view** under ‘My views’ or ‘Shared views’ (left sidebar) to quickly view when you need it (we really recommend this feature)

![](attachments/191169731/191169815.jpg)

![](attachments/191169731/191169821.jpg?width=680)

![](attachments/191169731/185893631.jpg?width=544)

## **Uploading assets**

**Duplication circumvention** - Before you upload an asset, see if it’s already in the CMS. Do a quick search. It’s not there? Great, now you’re free to upload like the wind.

1.  Use the **Add asset** button, top right-hand corner, and select single asset or multiple.

- For a **Single asset**  
  A. Drag & drop or use the file selector\* to add your file  
  B. The file’s name will auto-generate the **Title**, which you can edit (see guidelines below)  
  C. Add the asset’s description (guidelines below)  
  D. **Publish** the asset
- For **Multiple assets**  
  A. Drag & drop or use the file selector to add your files  
  (NOTE: In the **Selected files** views, if you’ve chosen images you’ll see an Edit option but it’s very limited and a bit rubbish. You’ll have better image editing options once the file is uploaded.)  
  B. **Upload** the files  
  C. You’ll see your assets in the Media dashboard, in DRAFT status.

  \* NOTE: In the **file selector** window you’ll see a range of source options - by URL, web search, social platforms, ‘take photo’ and more. Because external content comes with inherent risks - copyright and ownership, privacy issues, brand risk and more - **please do not use any of these sources unless approved by the Brand team.** The one exception to this rule is the **Link (URL)** option if goes to a Shelter image, [like this one](https://images.ctfassets.net/6sxvmndnpn0s/6X2WSOpES3MIBnhXHPJtDF/58f45342633d12308fff3458c2731933/Denise-and-baby-at-window.jpg) for example.

  ![](attachments/191169731/191201461.jpg?width=408)

### **Decision: Be lazy or be accessible?**

![](attachments/191169731/191201359.jpg?width=680)

At this point you can either tick the box next to each asset and click **Publish** to do a quick bulk publish of your assets. But they’ll be _missing descriptions_. For images, descriptions are crucial:

- They are the **alt text** read aloud to users with visual or cognitive disabilities. Good alt text is one of the first principles of web accessibility.
- If a browser can’t load an image or a user chooses not to display images, the alt text is displayed.
- Alt text gives your image semantic meaning for search engines.

Even for non-image assets, descriptions are vital to helping people and machines understand what your asset is about.

Of course, you can go ahead with the bulk publish, then go into each asset later and add their descriptions. But it’s better practice to be disciplined and add your descriptions, asset by asset, **before** publishing them.

**If you have questions about accessibility**, contact the Central Digital UX team.

More info on alt text:

- [https://webaim.org/techniques/alttext/](https://webaim.org/techniques/alttext/)
- [https://www.w3.org/WAI/fundamentals/accessibility-principles/#alternatives](https://www.w3.org/WAI/fundamentals/accessibility-principles/#alternatives)

## **Guidelines for naming assets**

It’s a common human trait: We often give our digital files vague, meaningless and nonsensical names, making it a challenge for us to find them months later and almost impossible for colleagues to get value from them.

One of Contentful’s real strengths is its search tool. It searches on all the text and completed fields within an entry, and gives you the searcher many criteria to search with. It’s very difficult to not find what you’re looking for in this system, no matter where you are in the content workflow.

That said, it all starts with a good asset name. It should clearly and accurately describe its content without being limiting. It should be meaningful by giving you a good idea of what’s in it and how or where it can be used.

### **Image naming**

When thinking about where images can be used on a website, images generally fall into two categories: generic or specific. Knowing which of these an image falls into will help you name it:

- **Generic**: If the photo shows unnamed people, locations or activities and could be used with several messages (for example, someone on a phone wearing a headset could be used to promote different helplines, or a couple reading a paper form could be used with content about renting and applying for benefits).
- **Specific**: If the photo shows a specific person, event or service (for example, a Shelter trustee or a banner on the finish line of the Asics 10K, marked as such).

### **Image description**

As explained above, an image’s description becomes its alt text - critical for accessibility and other content requirements. Add a description that describes what’s in the photo in less than 50 words.

### **See where an image is used**

Whenever you need to see where an image or asset is being used within content, use **Links** in the right sidebar. You’ll see links to every content entry that’s using it. Click a link to go to that entry. (NOTE: Within **Links**, Contentful annoyingly does not show you what content type a link is. You need to follow the link to find out.)

![](attachments/191169731/199361026.jpg)

### **Editing images within Contentful**

The media library gives you basic options for resizing and cropping an image. But any changes you make to an image are applied to that entry - it doesn’t save as a separate entry. (Contentful will give you an **Upload** prompt once you’ve saved your edits.) And it does not let you duplicate an entry and work from the duplicate. Something to bear in mind before you make any edits.

![](attachments/191169731/199295430.jpg)

![](attachments/191169731/199361032.jpg)

### **Images on the fly**

It’s best practice to upload, name and describe your images _before_ you build the content that will use them. But that’s not always possible or practical. You might be building a two column block for a page and you’ll suddenly realise there’s an image in Storyhouse that would be perfect for those 3 paragraphs about sofa sleeping. Here’s what to do in this scenario:

![](attachments/191169731/185926361.jpg?width=340)

1.  **Search** the Media library first. Maybe the image you have in mind is already in the system. Or maybe there’s an even better image for the purpose. Resist the temptation to **Create new asset** and help keep the system from being overcluttered with duplication.
2.  If you can’t find what you need, go ahead and use **Create new asset** to upload an image - taking a minute to give it a clear name and good description.

## **How Contentful handles images**

Oh the joy! In the painful past of content management systems, an image had to be optimised - resized and compressed - for every place you intended to use it.

Not in Contentful. Using its [images API](https://www.contentful.com/developers/docs/references/images-api/), You can upload a large image (within reason: the CMS has a 20mb limit on asset files), name and describe it. Then when you bring it into a 235 x 150 image space on a content card, Contentful optimises it for you. The ‘intrinsic’ (original) image file stays at the size you uploaded it.

In this example, the intrinsic image of Rose is 1.3mb. But for use in the two column block, Contentful has reduced it to 151kb (which could still be reduced further, to consider mobile users).

![](attachments/191169731/185893656.png)![](attachments/191169731/191299607.png)

So the guidance it to upload an image large enough to be used in the bigger sizes - hero banners, full width images, etc.

## **Summary points on images in Media**

- When you upload an image, give it a name that’s clear, and give it a description that provides useful information about what’s in the image, for users with disabilities, for SEO and for users whose browsers don’t display images.
- Always use JPG format for photographic images and GIF for non-photographic uses like logos.
- Before you upload an image, search to see if it already exists.
- Do not use the upload options for external channel or storage sources (Facebook, Instagram, Google Drive, Dropbox etc) unless you’ve been approved to do so by the Brand team.
- Avoid the temptation to upload images in the flow of content creation.
- If you do upload an image as you’re building content, take the time to give it a good name and description.
- You don’t have to optimise a large image for a small page pattern. Contentful will handle it for you. So upload an image large enough to be used in the bigger sizes such as hero banners.

**Any questions?** [Email Lindsay Foley](mailto:lindsay_foley@shelter.org.uk) in the Central Digital team.

## Attachments:

![](images/icons/bullet_blue.gif) [media types.jpg](attachments/191169731/191169815.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [image keyword search.jpg](attachments/191169731/191169821.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [saved views.jpg](attachments/191169731/185893631.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [asset bulk publish.jpg](attachments/191169731/191201359.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [images on the fly.jpg](attachments/191169731/191235173.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [images on the fly.jpg](attachments/191169731/191235165.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [insert asset.jpg](attachments/191169731/185926361.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [swimmers-london-triathlon — Media — Shelter England — master — Contentful 29-07-2020 23-50-20.png](attachments/191169731/186123919.png) (image/png)  
![](images/icons/bullet_blue.gif) [Leave a gift in your Will - Shelter Scotland 03-08-2020 09-32-14.png](attachments/191169731/191267218.png) (image/png)  
![](images/icons/bullet_blue.gif) [Rose Arnall — Media — Shelter England — master — Contentful 03-08-2020 08-55-39.png](attachments/191169731/186123925.png) (image/png)  
![](images/icons/bullet_blue.gif) [Rose Arnall — Media — Shelter England — master — Contentful 03-08-2020 08-55-55.png](attachments/191169731/185893656.png) (image/png)  
![](images/icons/bullet_blue.gif) [Leave a gift in your Will - Shelter Scotland 03-08-2020 09-32-14.png](attachments/191169731/191299607.png) (image/png)  
![](images/icons/bullet_blue.gif) [file selector.jpg](attachments/191169731/191201461.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [image-20200803-085642.png](attachments/191169731/191267235.png) (image/png)  
![](images/icons/bullet_blue.gif) [image where used.jpg](attachments/191169731/199361026.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [image cropping.jpg](attachments/191169731/199262518.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [image resize.jpg](attachments/191169731/199361044.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [image resize.jpg](attachments/191169731/199295430.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [image cropping.jpg](attachments/191169731/199361032.jpg) (image/jpeg)
