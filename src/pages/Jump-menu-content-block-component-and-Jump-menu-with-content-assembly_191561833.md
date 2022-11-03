---
title: Jump menu content block component and Jump menu with content assembly
description: Jump menu content block component and Jump menu with content assembly
layout: ../layouts/MainLayout.astro
---

![](attachments/191561833/199361609.jpg?width=448)

For long pages like a [privacy policy page](https://england.shelter.org.uk/contact_us/privacy), jump menus are essential for helping the user find content quickly.

In Contentful you build them with two content types:

- The **Jump Menu Content Block** component to create the individual blocks, with options for a rich range of content (video, search tools, images and more).
- The **Jump Menu with Content** assembly to bring together the blocks into one element. This assembly will auto-generate a jump menu of text links using the titles of each block.

You can then use these content types within a [content page template](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191168513/Content+page+template).

## **How to create them**

These steps reflect building from the ground up – creating blocks then the assembly. But you can also start with the assembly and create your blocks from within the assembly’s entry editor.

Or for that matter, you can start with the page the assembly will sit on, and create the assembly and blocks from within the page’s entry editor.

**That said, creating the blocks first follows the principle of content re-use**. If you plan ahead and create content blocks separately from where they’ll be used, you’ll have a better understanding of multiple places you could potentially use that block. For example, if you create a block describing what Security of Tenure is, that block could be used in a wide range of pages.

### **Create your blocks**

1.  Use **Add entry** to select **Component - Jump Menu Content Block**
2.  **Internal title** - use a clear and unique name that will identify the content
3.  **Block Title** - the name you use here will become both the H3 subheading above its text and the link within the jump menu. So aim for usability – clearly telling the user what’s in the block.
4.  **Block content** \- write or paste your text into the rich text editor (RTE). You can format text just as you would for any other RTE, add links and embed other content entries:

- [Accordion assembly](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191170123/Accordion+component+and+Accordion+assemblies)
- [CTA assembly](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/199295203/CTA+assembly+and+Standard+CTA+component)
- [Download banner assembly](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191235361/Download+CTA+component+and+Download+banner+assembly)
- [Advice search box component](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191170226/Advice+search+box+component)
- Component – Google map
- Component – Inline advice tool
- [Inline callout component](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191267324/Inline+callout+component)
- [Video embed component](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191170966/Video+embed+component)

Once your block’s content is ready, **publish** the component.

To create further blocks, the easiest way is to duplicate the published block while you’re still in it. Click the 3 dots upper right and select **Duplicate**. In the new entry’s editor, change your internal title, block title and RTE content, publish it, rinse and repeat until all your blocks are done.

### **Create your assembly**

1.  Use **Add entry** to create a new **Assembly – Jump Menu with Content**
2.  Give it a clear **Internal title**. It won’t have a user-facing title like a subhead – it will simply generate a jump menu of links. Normally, you’ll add the assembly to a [Content page](https://shelteruk.atlassian.net/wiki/spaces/CDP/pages/191168513/Content+page+template) and use that page’s RTE for any introductory text you want above the jump menu.
3.  Use **Link existing entries** to add the blocks you’ve just built
4.  If you want to change the order of blocks in the assembly, click-drag the blocks by their left edge
5.  **Publish** your assembly

It’s now ready to be added to a content page.

**Any questions?** [Email Lindsay Foley](mailto:lindsay_foley@shelter.org.uk) in the Central Digital team.

## Attachments:

![](images/icons/bullet_blue.gif) [jump menu.jpg](attachments/191561833/199361609.jpg) (image/jpeg)
