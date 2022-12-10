# Front-end Style Guide

 you can use css libraries for the project.


# Application - 1


# make this application specifically responsive.

1) Load a book from disk(files will be provided).


2) Format the document: remove line breaks and carriage returns and replace with a <br>(Use Javascript Regular Expression).


3) get the stats for the book.

4) sort the words to get most used and least used words

5) filter out the common words.

const removeWords = [
    "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"
    ];


 5)   Return the top 5 words, least 5 and  document stats.

 6)  highlight the words in search and    return their total instances in document.



# Application - 2



# Important!!! 1) use javascript to add cards in dom.
(don't hardcode elements in html, marks will be deducted);

2) make a grid of cards with images at random position(shuffled) each time document reloads or game restarts.

3) use animal images from unsplash.(6 pairs i.e 12 cards will be generated);

4) by default the card would be white and when flipped on click the image will be shown.

# 5) Use CSS properties(MDN): transform-style(applies on child element), backface-visibility , perspective(applies on parent element) to achieve fliping effect.

6) apply box shadow, transition  property on card.

7) add flip functionality using The toggle() method javascript.


8)match the cards with same images.


9) if the card matches remove the flipping functionality and the card remains flipped.

# 10) the matched images should be unclickable.(Use CSS property:  pointer-events)


11) change the counter if the images dont match and keep it constant when images match everytime.

12) If all images matches in remaining try's, show an alert you have won the game.

13)If 0 try's are remaining alert the game over and reset the whole grid with all images fliped back and shuffled.

14) reset the try's remaining to intial value on winning and losing the game.


