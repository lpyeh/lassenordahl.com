---
path: "/projects/contextual-emojis"
date: "2017-06-01"
title: "Contextual Analysis of Emojis"
---
# Contextual Analysis of Emojis

For my **CSCI 534** class, *Affective Computing*, I worked on a research project with four other master and PhD students. Our research question revolved around the usage of emojis in social media. It's a common preprocessing technique to strip emojis out of text prior to text analysis because their contributions are difficult to capture meaningfully. With a huge growth in social media platforms and users, emojis are being used more and more as direct ways to communicate, not just decorators of text. Messages are now sent with only emojis to get a point across, and they're usually understood by the recipient to the point of not requiring textual clarification. In order to fully capture the meaning of social media posts and conversations, we must find a way to meaningfully translate and understand emojis in the contexts they're being used. 

![emoji_1](https://user-images.githubusercontent.com/26417696/102171838-788c1f00-3e65-11eb-891c-f4b6cc9be51f.png)

A lot of existing work focuses on emojis in sentiment analysis which, while being a meaningful representation, offers only a two dimensional look at how emojis are used to convey internal states of emotion and thought in the social media environment. Other research analyzes emojis in a more high-dimensional emotional space but limit the emojis studied.  They also usually use the emotion categorization of the emoji to inform the context. We wanted to use an unsupervised approach to examine the opposite: what if we allowed the content and meaning of the text to inform the meaning of the emoji? Are there contextual clues we can uncover in text that would contribute to the understanding of the emoji being used? We used multiple methods to investigate these questions a little further, to gain an insight into how emojis are being used in multiple different social media environments.

### Methods

We decided to use a classical emotion model, Ekman's six basic emotion model, to designate what emotions we wanted to try and capture in our analysis. We decided to use Twitter for the abundance of emoji's used in normal posts, but also for the availability of data. We collected 83,000 tweets ranging from 2018 to 2020. We queried for 70 different emojis, with about 1000 - 1,200 tweets per emoji. We extract all the emojis from text and, using Ekman's six basic emotions, we pre-categorize all the emojis into emotion labels for later comparison to our contextual models.

![emoji_2](https://user-images.githubusercontent.com/26417696/102173774-d458a700-3e69-11eb-8ba8-8213f6784e83.png)

### Models and Results

We wanted to use a multitude of tools to try and capture the emotional context of emojis in the tweets we scraped. We used three main NLP methods: BERT, LDA, and LIWC.

![emoji_3](https://user-images.githubusercontent.com/26417696/102173670-8e034800-3e69-11eb-9f58-4a0c7a55afd0.png)

**BERT**

We used BERT, as outlined in the paper, *[Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/abs/1810.04805)*, to predict emotion labels for tweets, which we then assign to the emojis present in tweets. This allowed us to utilize the language present to inform the meaning of emojis, rather than the other way around, which is how emoji analysis is typically done. We used a dataset of tweets annotated for Ekman's emotions (Mohammad, 2017) and trained our BERT model to predict the emotion in our dataset. We then analyzed the way the pre-determined labels of our emojis compare to the emotion label assigned by BERT. 

![emoji_4](https://user-images.githubusercontent.com/26417696/102173713-a3787200-3e69-11eb-99fe-eaf814679049.png)

![emoji_5](https://user-images.githubusercontent.com/26417696/102173769-cdca2f80-3e69-11eb-85fb-03cdad2d32b2.png)

The results are shown above in these graphs of odds ratios. This basically shows that there are certain correlations and likelihoods between the pre-assigned emotion to an emoji and it's predicted emotion category based on the BERT model. For instance, we see that tweets predicted to have **disgust** as an emotion label, are more likely to contain emojis that are categorized as **anger**, **disgust**, and **surprise**. Another example, **joy**, shows that tweets labeled with this particular emotion, are more likely to contain emojis that are also labeled joy. Some of the more "complex" emotion labels like **disgust** or **fear** contain positive odds ratios with multiples emotions, maybe hinting at the multi-dimensionality of certain emotions.

**LDA**

Beyond emotion, we also wanted to examine the topics typically associated with each emoji. It's no secret that certain emojis are used in certain situations, and we wanted to try and capture that very different, but meaningful representation in our work. LDA is a topic-modeling technique that infers topics and assigns a probability distribution to each tweet and maps it to the topics inferred.  

![emoji_6](https://user-images.githubusercontent.com/26417696/102173820-f520fc80-3e69-11eb-9d76-0ecb38cc8a7b.png)

The results from the LDA analysis are shown in the graph above. It's a little messy, which could be due to a variety of factors, but within the noise we can see some patterns emerge that make some sense. When looking at the fifth row of topics, the one that starts with "day", we see that **joy** is the most likely emotion associated with this row. Looking at it more closely, it makes a little bit of sense! Topics that are in this row include "happy", "best", "birthday", "home", and "god". It's not unreasonable to think that these words could represent the emotion joy. The last row is also interesting to look at, which the dominant emotion being **surprise**, we see words like "wait" or "lol" present, which could point to certain colloquial trends that correlate with surprise in social media.

**LIWC**

Another way we chose to analyze the context surrounding the usage of emojis was by utilizing a dictionary-based feature extraction technique that looks at different psycho-linguistic and social constructs, called Linguistic Inquiry Word Count. There are different top-level categories  that are in LIWC, and words associated with each category below. We chose the following categories to use in our analysis: Affective, Social, Cognitive, and Biological Processes. We used regular expressions to match the words that were designated into each of those categories to the words in each tweet, and acquired a total word count for each. We then got the loadings and coefficients for each emotion. 

![emoji_7](https://user-images.githubusercontent.com/26417696/102173830-fc480a80-3e69-11eb-809d-49788354e7ec.png)

![emoji_8](https://user-images.githubusercontent.com/26417696/102173857-12ee6180-3e6a-11eb-9b29-3f4b70c027aa.png)

The results for the LIWC model were some of the most surprising and informative. We can see for certain emotions, some psychological and social trends come to light. For instance, **disgust**, has the following LIWC sub-categories as the most predictive: Biological Processes, Health, Ingestion, and Sexual. It's very plausible to think that tweets and texts related to those topics could be deemed as "disgust". Another cool example, the words Causasion, Differentiation, and Insight are some of the words that lead to a higher probability of the text being classified as **surprise**. It was really cool to see what categories of the human experience informed certain emotions, and what was even cooler about this analysis was that it was done during the COVID-19 pandemic. A little less than half of our tweets were scraped at the beginning of the pandemic, so it was cool to see some of these strong correlations for negative emotions like **fear**, **anger**, or **disgust**. It was a huge reminder that human interaction greatly reflects and communicates our daily lives and emotions. This third additional analysis rounded out our chosen methods for trying to gauge the context of the tweets we collected, and how these contexts all tie in to the emojis people choose to use as an additional form of communication.

### Additional Thoughts

Overall, I really loved working on this project! It was short-lived and it was during a really tumultuous time, but not only was it an incredibly collaborative project, it was a project that highlighted everyone's interests, strengths, and differences. Just on our team alone, we had a computer scientist who knew the ins and outs of full-stack development, we had a NLP/CS researcher, a cognitive scientist/computer scientist, and two people who regularly worked on robotics and hardware. Despite the craziness of the second half of our semester, everyone was super present all the time and offered to help out whenever someone needed it. Everyone contributed a significant amount and it was truly beautiful watching everyone work hard to get it done. 

I really love the work from both a technical and social stand-point as well. Technically, we used a lot of different NLP methods and frameworks to do our analysis. From using more traditional approaches, especially in the social NLP world, like LIWC and LDA, to using the newest state-of-the-art NLP models, ilke BERT, we utilized all kinds of methods to really extend our perspective on the contexts present in our dataset. We also used and tried out many different python packages to do the scraping and tried a bunch of different queries to get an equal distribution of tweets per emoji. From a social and psycho-linguistic aspect, we tried really hard to address what, we thought, was a gap in our current understanding of how emojis interact with text, emotions, and communication. We recognize, as personal users of social media and texting platforms, the power that emojis have in contributing to human interaction, and we wanted to attempt at capturing that power in a meaningful way. Is our research perfect? Absolutely not. Was it something that we found to be impactful? One hundred percent. Despite the flaws, I truly believe that the research presented here is a great step forward towards capturing the nuances in social media interaction and modern-day communication, in an extensive and comprehensive way. 

One of the most important things to know about me is that I *live* for collaboration and this project exemplified the beauty of interdisciplinary participation and cooperation. Without everyone's perspective, there's no way that this project could've been finished. It really highlights the importance of surrounding yourself with smart, but different people. The paper can be downloaded [here](https://drive.google.com/file/d/1GUjkJb1FkaZx_q0YjIIPYotiI-bSa3ef/view?usp=sharing) and our final presentation for our *Affective Computing* class can be found [here](https://docs.google.com/presentation/d/18AJT7tYwC07lbROclVvJGOUFDbLsOlC52zfL3-nWUKo/edit?usp=sharing). 

### Thanks for reading!