<template>
  <section class="intro">
    <div class="quote">"{{ getQuote() }}"</div>
    - Jeff Goldblum, <em>Thursday, June 5, 1997</em>
  </section>
</template>

<script>
import { getRandom } from "@/helpers/array.js";

export default {
  name: "intro",
  methods: {
    getQuote() {
      const quotes = [
        "I, uh, don't think I'm, y'know, so different than your average, y'know, average.",
        "No matter how you travel, it's still you going.",
        "It's a delight to trust somebody so completely.",
        "I love to be directed. They can trust me and go.",
        "Hawaii can be heaven and it can be hell.",
        "I love the ocean. Boats, not so much.",
        "This was one of the places people told me to go, it was one of the big trips that you should see: Alaska.",
        "It's mysterious what attracts you to a person.",
        "I travel for work, but recently, friends said I should take major trips.",
        "I've turned my guest house into this little studio, and we have actors come over and do readings.",
        "If any movie people are watching this show, please, for me, have some respect. You wanna sell some tickets, act like you know what you're talking about.",
        "It's an important fact of life, war.",
        "It's not charming to go on a show and say, I dunno. It doesn't fool anybody. There's nothing glamorous about it at all.",
        "People work harder when conditions are worse.",
        "The original settlers of Alaska apparently were Russian.",
        "You never know in a movie if it's going to be a sequel, but right now I'm proud of what we produced.",
        "I now, more and more, appreciate when I'm in a group of good people and get to work in good movies and projects. I'm wildly grateful and appreciative.",
        "Well, of course I would choose to be the top scientist in my field.",
        "Even if I don't have a job, I work on plays and scenes.",
        "How can you say when you're attracted to something? It's not easy to articulate my tastes.",
        "The movie feels to me like a real work of lovely art.",
        "At the end of the movie all of us have this shared redemption.",
        "My friend Ed Begley goes fishing. It's a little smelly to me, I don't like it so much. I like to eat fish, but I don't like to catch them.",
        "No pay, no Goldblum. That's it.",
        "It's nice to play a character that has a soulful, dependent, close relationship. It must mean my character is interesting in some way.",
        "I don't go to these places where there are belly dancers and this and that.",
        "It's best not to stare at the sun during an eclipse.",
        "I thought, this is a good sign. There's something perfect and right about this.",
        "To be able to always have a super sense of who I was and my own real identity and be petty and seem informed and always thinking in thoughts would be great.",
        "Well, well, well, it's certainly a compelling provocative exciting delicious to think about idea, smart people say the universe is so big there must be something statistically it could be likely there could be something happening on some other world.",
        "I'm simply saying that life, uh... finds a way.",
        "Must go faster.",
        "But again, how do you know they're all female? Does somebody go out into the park and pull up the dinosaurs' skirts?",
        "Don't you see the danger, John, inherent in what you're doing here? Genetic power is the most awesome force the planet's ever seen, but you wield it like a kid that's found his dad's gun.",
        "See, here I'm now by myself, uh, talking to myself. That's chaos theory.",
        "Remind me to thank John for a lovely weekend.",
        "God creates dinosaurs, God destroys dinosaurs. God creates Man, man destroys God. Man creates dinosaurs.",
        "If The Pirates of the Caribbean breaks down, the pirates don't eat the tourists.",
      ];

      const quote = getRandom(quotes);

      const brokenCommas = quote.split(",");
      const newQuote = [];

      for (const section in brokenCommas) {
        if (Math.random() > 0.5) {
          newQuote.push(
            getRandom(getRandom(quotes).split(",")).replace(
              /^.[a-zA-Z]/,
              (char) => `${char[0].toLowerCase()}${char[1]}`
            )
          );
        } else {
          newQuote.push(brokenCommas[section]);
        }
      }

      const brokenStops = newQuote
        .join(", ")
        .split(". ")
        .filter((exists) => !!exists);
      const evenBetterQuote = [];

      for (const stoppedSection in brokenStops) {
        if (Math.random() > 0.5) {
          evenBetterQuote.push(
            getRandom(
              getRandom(quotes)
                .split(/\.\s?|,\s/)
                .filter((exists) => !!exists)
            ).replace(
              /^.[a-zA-Z]/,
              (char) => `${char[0].toUpperCase()}${char[1]}`
            )
          );
        } else {
          evenBetterQuote.push(brokenStops[stoppedSection]);
        }
      }

      return `${evenBetterQuote.join(". ").replace(/\.,|,\./g, ",")}.`
        .replace("..", ".")
        .replace(/^\s/, "")
        .replace(/^./, (char) => char.toUpperCase());
    },
  },
};
</script>

<style scoped lang="scss">
.intro {
  color: #999;
}

.intro .quote {
  font-family: "Slabo 27px", serif;
  font-size: 20px;
  color: #000;
  width: 90%;
  max-width: 700px;
  margin: auto;
}

.intro em {
  font-size: 12px;
}
</style>