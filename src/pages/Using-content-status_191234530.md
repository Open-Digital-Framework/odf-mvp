---
title: Using content status
description: Using content status
layout: ../layouts/MainLayout.astro
---

**One of Contentful’s great strengths also poses a risk. Because components and assemblies can be shared across multiple pages - saving time and maintaining consistency - a change to one of them is reflected everywhere it’s used.**

So it’s important to know how the system’s statuses work, so you don’t mess up anyone else's content by mistake.

Content in Contentful will always display one of four statuses: DRAFT, CHANGED, PUBLISHED or ARCHIVED.

- DRAFT – Content that hasn’t been published yet
- CHANGED – Content that has been published, then edited or altered but not yet re-published
- PUBLISHED – Content that’s in a ready state for use within other content or on the web
- ARCHIVED – Content that still exists but has been removed from the main content entry list, and is not usable with other content or on the web

Contentful is an ecosystem of inter-connected content - components within other components within assemblies within pages. And since a range of people and teams own, create and publish content, there will be times when the page you’ve built and published contains content that someone else has changed…without you knowing it.

How can you manage this jaw-clenching scenario?

## **Avoiding the debacle**

Imagine that you’ve just built an exquisite page for the website. You’ve lovingly hand-crafted it, bringing together thoughtful, user-focused and signed-off copy with compelling images and a half-dozen other pieces of content to create what you know will be an engaging and valuable experience for the many people who’ll visit it.

![](attachments/191234530/191169710.jpg?width=272)

Let’s say one of those other pieces of content is an inline callout which you checked when you built the page. You know the callout’s link to related content will give your users a valuable next stop on their journeys.

So you publish your finished page, making it ready to go live on the site, and you go for a nice long ramen lunch to celebrate. But unbeknownst to you, Karl in the CPC product team has changed the callout. While you slurped your spicy tonkotsu, Karl repointed the callout’s link to a page that really has nothing to do with your page and users.

When you return to your desk, you give the page one last check before making it live and you see:

![](attachments/191234530/191169542.jpg?width=680)

The page is still in PUBLISHED status but that valuable callout is now in CHANGED status. You suddenly get a bad feeling and it’s not from the tonkotsu. What to do? Simple: just open the inline callout component (click the 3 dots and select **Edit**) to see what has changed and who changed it.

The content block that you add or embed in a page will display its status. So whether or not your page is in PUBLISHED status, any added/embedded content that’s been changed will display as, yes, CHANGED. Easy.

_The nightmare comes_ when any of that added/embedded content is changed by someone else (Karl, we’re looking at you) **and** published. It will display within your Contentful page as **PUBLISHED** but far as you know, nothing has happened to it since you added it to your page. You’re blind to any changes.

**The solution? Communication!**

1\. Any time you make a change to content, and especially if you publish that change, check to see where it’s already being used and let people know (editors of the content where it’s used). See below for **Knowing where content is being used.**

![](attachments/191234530/191266983.jpg?width=272)

2\. When you make a change to content that you know might be used by other editors, leave a note in the entry’s **Comments** tab, upper right.

3\. Use your team’s meetings (whether it’s daily stand-ups, content design sprint planning or whatever) to let people know what’s being changed.

## **Knowing where content is being used**

![](attachments/191234530/191234558.jpg)

In every content entry’s editor, in the sidebar you’ll see **Links**. Any other content entry that has added/embedded your content - or hyperlinked to your entry - will be displayed as a link. You can click to go it and see what’s been changed by either reading any comments in the entry, or by using the **Versions** feature (see below).

NOTE: Annoyingly, **Links** does not show you the content types those links represent. You’ll need to click them to find out.

## **Version control**

Also in the sidebar you’ll see VERSIONS. Select a previous date to compare to your current version and click **Compare with current version**.

The new screen will show you two columns displaying any field differences between the two versions: on the left is the previous version and on the right is what’s current.

Use the radio buttons to select which version of that field you can to use (the current version’s buttons will always be selected as default).

If you want to do a complete rollback to the previous version including all its fields as they existed on the date you selected, click **Select all fields from this version.**

![](attachments/191234530/191169672.jpg)![](attachments/191234530/191169678.jpg?width=680)

## **In summary**

For a professional web editor, there are few things worse than not knowing when someone else has changed your ready-to-go-live content. Two of Contentful’s upsides, fast content creation and easily re-using content, come with the downside risk of one editor’s changes accidentally affecting another editor’s work.

**So communicate.** Use the system’s comments feature to tell people what’s been changed. And please look out for other editors: don’t publish anything without knowing where it is used.

**Any questions?** [Email Lindsay Foley](mailto:lindsay_foley@shelter.org.uk) in the Central Digital team.

## Attachments:

![](images/icons/bullet_blue.gif) [changed callout.jpg](attachments/191234530/191169551.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [changed callout.jpg](attachments/191234530/191266966.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [changed callout.jpg](attachments/191234530/191169542.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [where used.jpg](attachments/191234530/191169598.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [comments.jpg](attachments/191234530/191169643.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [where used.jpg](attachments/191234530/191234580.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [where used.jpg](attachments/191234530/191234597.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [comments.jpg](attachments/191234530/191266983.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [where used.jpg](attachments/191234530/191234558.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [versions.jpg](attachments/191234530/191234618.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [version compare.jpg](attachments/191234530/191234633.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [versions.jpg](attachments/191234530/191169672.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [version compare.jpg](attachments/191234530/191169678.jpg) (image/jpeg)  
![](images/icons/bullet_blue.gif) [ramen.jpg](attachments/191234530/191169710.jpg) (image/jpeg)
