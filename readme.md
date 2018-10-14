![heroimage.png](./media/describe.png)
>Query words from oxford dictionaries API

## Usage

To query for a words definition simply pass it as an argument to the script

```bash
$ describe tiny

tiny is very small
```

Alternatively, you can try deriving the words meaning by its synonyms

```bash
$ describe --synonyms tiny

minute
small-scale
scaled-down
mini
baby
toy
pocket
fun-size
petite
dwarfish
knee-high
miniature
minuscule
microscopic
nanoscopic
infinitesimal
micro
diminutive
pocket-sized
reduced
Lilliputian
```

or its antonyms

```bash
$ describe --antonyms tiny

huge
significant
```


## Installation

```bash
$ git clone https://github.com/pavanjadhaw/describe

$ cd describe

$ npm install
$ npm link
```


## Requirements

`nodejs`
`npm`