const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const urlDatabase = {}; 

const words = [
    // NATO Phonetic Alphabet
    'alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel',
    'india', 'juliett', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa',
    'quebec', 'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whiskey',
    'xray', 'yankee', 'zulu',

    // Animals
    'lion', 'tiger', 'bear', 'wolf', 'fox', 'eagle', 'shark', 'cobra', 'viper',
    'panther', 'leopard', 'jaguar', 'falcon', 'raven', 'dragon', 'griffin',
    'phoenix', 'serpent', 'lynx', 'orca', 'stallion', 'hawk', 'owl', 'puma',
    'cougar', 'mamba', 'scorpion', 'mantis', 'krill', 'coyote', 'otter', 'badger',
    'mongoose', 'walrus', 'heron', 'sparrow', 'python', 'falconet', 'ibis', 'caracal',

    // Colors
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white',
    'silver', 'gold', 'bronze', 'ivory', 'indigo', 'violet', 'crimson', 'azure',
    'emerald', 'scarlet', 'turquoise', 'amber', 'coral', 'sapphire', 'jade',
    'magenta', 'maroon', 'beige', 'pearl', 'onyx', 'teal', 'ochre', 'sepia', 'charcoal',

    // Common Nouns
    'river', 'mountain', 'ocean', 'forest', 'desert', 'castle', 'bridge', 'harbor',
    'island', 'volcano', 'meadow', 'valley', 'planet', 'star', 'galaxy', 'comet',
    'canyon', 'cliff', 'lagoon', 'waterfall', 'tundra', 'reef', 'dune', 'cave',
    'glacier', 'prairie', 'marsh', 'harvest', 'grove', 'fjord', 'temple', 'monolith',
    'spire', 'citadel', 'ruin', 'fortress',

    // Abstract Concepts
    'spirit', 'shadow', 'phantom', 'echo', 'dream', 'vortex', 'matrix', 'cipher',
    'quest', 'saga', 'legend', 'myth', 'destiny', 'oracle', 'enigma', 'zenith',
    'infinity', 'horizon', 'paradox', 'omen', 'mirage', 'reverie', 'aether',
    'genesis', 'oblivion', 'eternity', 'chaos', 'balance', 'ascend', 'rift',
    'equilibrium', 'fate', 'prophecy', 'vision',

    // Verbs
    'running', 'jumping', 'flying', 'swimming', 'crawling', 'dancing', 'singing',
    'whispering', 'shouting', 'exploring', 'wandering', 'seeking', 'finding',
    'charging', 'hunting', 'soaring', 'climbing', 'drifting', 'gliding', 'tracking',
    'forging', 'building', 'crashing', 'blazing', 'diving', 'lurking', 'piercing',
    'breaking', 'storming', 'vanishing', 'emerging', 'rising',

    // Space & Sci-Fi
    'nebula', 'asteroid', 'quasar', 'pulsar', 'singularity', 'wormhole', 'cosmos',
    'orbit', 'nova', 'supernova', 'stardust', 'eclipse', 'meteor', 'andromeda',
    'proton', 'photon', 'darkmatter', 'gravity', 'eventhorizon', 'hyperdrive',
    'ion', 'galactica', 'void', 'terraform', 'warp', 'starlance',

    // Fantasy & Myth
    'unicorn', 'troll', 'giant', 'mermaid', 'centaur', 'minotaur', 'kraken',
    'hydra', 'basilisk', 'djinn', 'valkyrie', 'wyrm', 'behemoth', 'leviathan',
    'goblin', 'sphinx', 'chimera', 'harpy', 'pegasus', 'selkie', 'naga', 'yeti',
    'golem', 'ifrit', 'lamia', 'dryad', 'sirena', 'draugr',

    // Military & Tactical
    'ranger', 'sniper', 'scout', 'guardian', 'sentinel', 'warden', 'raider',
    'striker', 'blazer', 'vanguard', 'trooper', 'marksman', 'operator', 'commando',
    'pathfinder', 'bomber', 'gunner', 'medic', 'engineer', 'spotter', 'artillery',
    'saboteur', 'pilot', 'sharpshooter', 'grenadier',

    // Technology & Cyber
    'protocol', 'binary', 'server', 'firewall', 'cypher', 'hacker', 'glitch',
    'kernel', 'script', 'datastream', 'nanobot', 'circuit', 'quantum', 'pixel',
    'algorithm', 'neural', 'cache', 'bandwidth', 'packet', 'byte', 'debugger',
    'botnet', 'malware', 'trojan', 'rootkit', 'databank', 'mainframe',

    // Weather & Nature
    'storm', 'lightning', 'thunder', 'rain', 'snow', 'hail', 'mist', 'fog',
    'frost', 'blizzard', 'cyclone', 'tornado', 'tsunami', 'drought', 'eclipse',
    'sunbeam', 'monsoon', 'gale', 'tempest', 'downpour',

    // Minerals & Elements
    'iron', 'steel', 'copper', 'platinum', 'titanium', 'carbon', 'quartz',
    'opal', 'ruby', 'diamond', 'topaz', 'beryl', 'amethyst', 'lithium', 'uranium',
    'mercury', 'sulfur', 'cobalt', 'nickel', 'zircon', 'obsidian',

    // Time & Seasons
    'dawn', 'dusk', 'midnight', 'sunrise', 'sunset', 'spring', 'summer',
    'autumn', 'winter', 'epoch', 'century', 'millennium', 'moment', 'hourglass',
    'twilight', 'solstice', 'equinox', 'yearling', 'timelock',

    // Food & Drink
    'honey', 'bread', 'coffee', 'tea', 'sugar', 'spice', 'berry', 'apple',
    'peach', 'cherry', 'plum', 'grape', 'cocoa', 'vanilla', 'mint', 'ginger',
    'olive', 'lemon', 'melon', 'hazelnut', 'almond',

    // Music & Sound
    'echo', 'harmony', 'melody', 'rhythm', 'chorus', 'symphony', 'crescendo',
    'tune', 'note', 'beat', 'bass', 'lyric', 'tempo', 'chord', 'vibrato',

    // Travel & Places
    'harbor', 'port', 'station', 'airport', 'plaza', 'avenue', 'alley', 'market',
    'bazaar', 'villa', 'manor', 'temple', 'shrine', 'fort', 'palace', 'arena'
];




app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.post('/api/lengthen', (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: 'originalUrl is required' });
    }

    try {
        new URL(originalUrl);
    } catch (error) {
        return res.status(400).json({ error: 'Invalid URL format' });
    }

    let randomPath;
    do {
        randomPath = Array.from({ length: 150 }, () => words[Math.floor(Math.random() * words.length)]).join('-');
    } while (urlDatabase[randomPath]); 

    urlDatabase[randomPath] = originalUrl;

    const lengthenedUrl = `${req.protocol}://${req.get('host')}/${randomPath}`;

    res.json({ lengthenedUrl });
});

app.get('/:randomPath', (req, res) => {
    const { randomPath } = req.params;
    const originalUrl = urlDatabase[randomPath];

    if (originalUrl) {
        console.log(`Redirecting ${randomPath} to ${originalUrl}`);
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});