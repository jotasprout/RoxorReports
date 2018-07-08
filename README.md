# RoxorReports
_Kickass dynamic PDF Acrobat Javascript application for private investigator._

I am so freaking proud of this dynamic **PDF** using templates with dynamic menus and what I'll call "smart redaction" I just can't stand it. I feel more creative, powerful, geeky, as well as downright handsome and sexy because of this I can't even stand it. I've made several interactive PDFs that I thought made the world a significantly better place but those just took time and effort. I'm creative and knew how to do what I wanted. This project, however, required I learn a bunch and solve a whole list of problems other people all over the web were struggling with and some people said these things couldn't be done. I am beating my chest and yelling like **Tarzan** right now.

The client had a list of what they wanted/hoped the PDF would do and each of them was a challenge by themselves, let alone getting all these "features" to work together and in a way that didn't make the user cry. Lots of Googling, forums, documentation, taking pieces from multiple solutions and combining them, followed by lots of experimentation, trial-and-error, debugging and falling in love--deeply and passionately--with **Acrobat**'s **JavaScript Console**.

The client is a private investigator who has been assembling his reports in (God have mercy on his soul) **MS Publisher**. He asked for what sounded pretty simple: templates for PDF forms. It got complicated surprisingly quickly and, as I said, I found that others have faced these problems and I had them all together. Below are some of the challenges I'll document along with their solutions in the next few posts.

## The Client's Hopes and Dreams
### Which came true cuz I'm totally the Fairy Godmother of Adobe Acrobat
Templates in the Investigation Report include, among others, a Subject Background form and an Investigative Action form.
* Each of those (and other) forms/templates need to be used multiple times in the same report so, as you may know, the form fields on each spawned page need to have different names so they can hold unique values. Not a problem, right? Wrong.
* There's a main form I've called the Report Dashboard in which the client enters the pertinent subject and locations so they are available in "Subject" and "Location" menus in the various templates/forms. 

**Challenge #1** Populating fields based on a menu choice is easy but populating a menu based on text fields was new to me. Still not too bad, though, right? Wrong. 

**Challenge #2** The dashboard might be updated after those pages (containing menus with unique names) are spawned.
* Other information on the dashboard appears on all pages' footers such as Case Name, Case Number, Date, and Page Number. 

**Challenge #3** Unique field names meant I needed to be creative (because the dashboard content such as date completed/submitted and such might not be entered until the end of the investigation) but that was (truly, this time) not bad. 

**Challenge #4** User needs to be able to rearrange and remove pages at will. This affected several things including but not limited to the page numbers. While the client owns Acrobat Pro ...
* Oh, and all of this needs to be possible after the client has saved, closed, and reopened the file as well.
* I still wanted the client have as little burden as possible. I wanted a design and process that was elegant, easy and simple. If he had the time and inclination to learn and master Acrobat's innards, he wouldn't be paying me, right? Right.

* **Redaction.** Never a fun topic for anyone, apparently. This client's situation is particularly unique. Nobody wants to pay a private investigator thousands of dollars for a report that says, "I didn't find anything useful" so my client's customers want to see they're going to get _something_ for their money. If the investigator shows the fruit of their labor, however, their customer can then just run with that information to their lawyer (another expensive expense of the client's customer) so they have no compelling reason to pay my client--at least not in a timely or easy manner. So, I need to creatively redact information while still showing there's something substantial ... in a way that doesn't make me want to cry like others suffering under a requirement for redaction.
* **Security.** Related to redaction but with other, more typical concerns like preventing printing, watermarks, and of course preventing changes ... all without requiring my client learn or do any more than they have to.

This project kicked so much ass because I kicked its ass so thoroughly. My client suggested I license or sell this template/report to thousands and thousands of investigators like him who share his struggles and I'll do what I can to profit further from this effort but, while he was saying that, all I was thinking was I couldn't wait to share everything I learned because, you know, OPEN SOURCE, BITCHES!