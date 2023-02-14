# ParserGram

![author-image]
![ts-image]
[![MIT License][license-image]][license-url]

#### ParserGram listens to Telegram channels/groups/chats and intercepts messages by trigger words.

Imagine that you have your favorite online store in Telegram. Products sell out very quickly, almost immediately after publication.

You are forced to keep such a channel in "silent" mode, due to the large number of uninteresting publications. Because of this, you miss out on really interesting offers.

ParserGram was created to solve this problem.

## Manual:

Rename and fill the .env file.

```shell
mv .env.example .env
```

- API_ID
- API_HASH
- CHANNEL
- ADDRESSEE
- PHONE_NUMBER
- SESSION

Create and populate a file with trigger words. (use lowerCase)

```shell
npm run words
```

```json
{
  "words": ["xbox", "vr", "iphone"]
}
```

Don't forget about:

```shell
npm i
```

## License

ParserGram is freely distributable under the terms of the [MIT license][license-url].

[author-image]: https://img.shields.io/badge/Author-Dmitriy%20Dzyuman-blueviolet
[ts-image]: https://img.shields.io/badge/Lang-TypeScript-blue
[license-image]: https://img.shields.io/badge/License-MIT-yellow
[license-url]: LICENSE
