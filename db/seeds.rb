# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

#users seed data
edgar = User.create!(username: 'The Raven', email: 'theraven@email.com', password: 'poeishere' )
andrew = User.create!(username: 'Hoody', email: 'hoody@email.com', password: 'hoody123')
jane = User.create!(username: 'JaneAusten', email: 'jane@email.com', password: 'janeaustin')
lovecraft = User.create!(username: 'hpLovecraft', email: 'mouthofmad@email.com', password: 'lovecraft')
sylvia = User.create!(username: 'sylviaP', email: 'sylvia@email.com', password: 'sylvia')
keats = User.create!(username: 'hyperion', email: 'keats@email.com', password: 'hyperion')
robert = User.create!(username: 'RobFrost', email: 'robert@email.com', password: 'roadsroad')

puts "#{User.count} Users created!"

testpost1 = Post.create!(title: 'The Raven', content: 'Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
    While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
“’Tis some visitor,” I muttered, “tapping at my chamber door—
            Only this and nothing more.”

    Ah, distinctly I remember it was in the bleak December;
And each separate dying ember wrought its ghost upon the floor.
    Eagerly I wished the morrow;—vainly I had sought to borrow
    From my books surcease of sorrow—sorrow for the lost Lenore—
For the rare and radiant maiden whom the angels name Lenore—
            Nameless here for evermore.

    And the silken, sad, uncertain rustling of each purple curtain
Thrilled me—filled me with fantastic terrors never felt before;
    So that now, to still the beating of my heart, I stood repeating
    “’Tis some visitor entreating entrance at my chamber door—
Some late visitor entreating entrance at my chamber door;—
            This it is and nothing more.”

    Presently my soul grew stronger; hesitating then no longer,
“Sir,” said I, “or Madam, truly your forgiveness I implore;
    But the fact is I was napping, and so gently you came rapping,
    And so faintly you came tapping, tapping at my chamber door,
That I scarce was sure I heard you”—here I opened wide the door;—
            Darkness there and nothing more.

    Deep into that darkness peering, long I stood there wondering, fearing,
Doubting, dreaming dreams no mortal ever dared to dream before;
    But the silence was unbroken, and the stillness gave no token,
    And the only word there spoken was the whispered word, “Lenore?”
This I whispered, and an echo murmured back the word, “Lenore!”—
            Merely this and nothing more.

    Back into the chamber turning, all my soul within me burning,
Soon again I heard a tapping somewhat louder than before.
    “Surely,” said I, “surely that is something at my window lattice;
      Let me see, then, what thereat is, and this mystery explore—
Let my heart be still a moment and this mystery explore;—
            ’Tis the wind and nothing more!”

    Open here I flung the shutter, when, with many a flirt and flutter,
In there stepped a stately Raven of the saintly days of yore;
    Not the least obeisance made he; not a minute stopped or stayed he;
    But, with mien of lord or lady, perched above my chamber door—
Perched upon a bust of Pallas just above my chamber door—
            Perched, and sat, and nothing more.

Then this ebony bird beguiling my sad fancy into smiling,
By the grave and stern decorum of the countenance it wore,
“Though thy crest be shorn and shaven, thou,” I said, “art sure no craven,
Ghastly grim and ancient Raven wandering from the Nightly shore—
Tell me what thy lordly name is on the Night’s Plutonian shore!”
            Quoth the Raven “Nevermore.”

    Much I marvelled this ungainly fowl to hear discourse so plainly,
Though its answer little meaning—little relevancy bore;
    For we cannot help agreeing that no living human being
    Ever yet was blessed with seeing bird above his chamber door—
Bird or beast upon the sculptured bust above his chamber door,
            With such name as “Nevermore.”

    But the Raven, sitting lonely on the placid bust, spoke only
That one word, as if his soul in that one word he did outpour.
    Nothing farther then he uttered—not a feather then he fluttered—
    Till I scarcely more than muttered “Other friends have flown before—
On the morrow he will leave me, as my Hopes have flown before.”
            Then the bird said “Nevermore.”

    Startled at the stillness broken by reply so aptly spoken,
“Doubtless,” said I, “what it utters is its only stock and store
    Caught from some unhappy master whom unmerciful Disaster
    Followed fast and followed faster till his songs one burden bore—
Till the dirges of his Hope that melancholy burden bore
            Of ‘Never—nevermore’.”

    But the Raven still beguiling all my fancy into smiling,
Straight I wheeled a cushioned seat in front of bird, and bust and door;
    Then, upon the velvet sinking, I betook myself to linking
    Fancy unto fancy, thinking what this ominous bird of yore—
What this grim, ungainly, ghastly, gaunt, and ominous bird of yore
            Meant in croaking “Nevermore.”

    This I sat engaged in guessing, but no syllable expressing
To the fowl whose fiery eyes now burned into my bosom’s core;
    This and more I sat divining, with my head at ease reclining
    On the cushion’s velvet lining that the lamp-light gloated o’er,
But whose velvet-violet lining with the lamp-light gloating o’er,
            She shall press, ah, nevermore!

    Then, methought, the air grew denser, perfumed from an unseen censer
Swung by Seraphim whose foot-falls tinkled on the tufted floor.
    “Wretch,” I cried, “thy God hath lent thee—by these angels he hath sent thee
    Respite—respite and nepenthe from thy memories of Lenore;
Quaff, oh quaff this kind nepenthe and forget this lost Lenore!”
            Quoth the Raven “Nevermore.”

    “Prophet!” said I, “thing of evil!—prophet still, if bird or devil!—
Whether Tempter sent, or whether tempest tossed thee here ashore,
    Desolate yet all undaunted, on this desert land enchanted—
    On this home by Horror haunted—tell me truly, I implore—
Is there—is there balm in Gilead?—tell me—tell me, I implore!”
            Quoth the Raven “Nevermore.”

    “Prophet!” said I, “thing of evil!—prophet still, if bird or devil!
By that Heaven that bends above us—by that God we both adore—
    Tell this soul with sorrow laden if, within the distant Aidenn,
    It shall clasp a sainted maiden whom the angels name Lenore—
Clasp a rare and radiant maiden whom the angels name Lenore.”
            Quoth the Raven “Nevermore.”

    “Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—
“Get thee back into the tempest and the Night’s Plutonian shore!
    Leave no black plume as a token of that lie thy soul hath spoken!
    Leave my loneliness unbroken!—quit the bust above my door!
Take thy beak from out my heart, and take thy form from off my door!”
            Quoth the Raven “Nevermore.”

    And the Raven, never flitting, still is sitting, still is sitting
On the pallid bust of Pallas just above my chamber door;
    And his eyes have all the seeming of a demon’s that is dreaming,
    And the lamp-light o’er him streaming throws his shadow on the floor;
And my soul from out that shadow that lies floating on the floor
            Shall be lifted—nevermore!',  user: edgar)

testpost2 = Post.create!(title: 'Hyperion', content: 'Bright star! would I were steadfast as thou art—
Not in lone splendour hung aloft the night,
And watching, with eternal lids apart,
Like Nature’s patient sleepless Eremite,
The moving waters at their priestlike task
Of pure ablution round earth’s human shores,
Or gazing on the new soft fallen mask
Of snow upon the mountains and the moors—
No—yet still steadfast, still unchangeable,
Pillow’d upon my fair love’s ripening breast,
To feel for ever its soft fall and swell,
Awake for ever in a sweet unrest,
Still, still to hear her tender-taken breath,
And so live ever—or else swoon to death.', user: keats)

testpost3 = Post.create!(title: 'Dark House', content: 'This is a dark house, very big.
I made it myself,
Cell by cell from a quiet corner,
Chewing at the grey paper,
Oozing the glue drops,
Whistling, wiggling my ears,
Thinking of something else.

It has so many cellars,
Such eelish delvings!
U an round as an owl,
I see by my own light.
Any day I may litter puppies
Or mother a horse. My belly moves.
I must make more maps.

These marrowy tunnels!
Moley-handed, I eat my way.
All-mouth licks up the bushes
And the pots of meat.
He lives in an old well,
A stoney hole. He\'s to blame.
He\'s a fat sort.

Pebble smells, turnipy chambers.
Small nostrils are breathing.
Little humble loves!
Footlings, boneless as noses,
It is warm and tolerable
In the bowel of the root.
Here\'s a cuddly mother.', user: sylvia)

testpost4 = Post.create!(title: 'Ember', content: 'I’ve heard the melancholic voices of madness pray,
along the crooked rivers winding through the brain.
Though a silence, so still, seized their breath away,
rapt I listened t’ward the distant words led astray. 
Bemused by what little of those fevered whimpers, 
had whispered in the burrows of that cerebral plane. 
Haunted at the lips by such motions they remember,
forgone in the dawn ‘til the dawn returned to ember.', user: andrew)

testpost5 = Post.create!(title: 'Despair', content: 'O\'er the midnight moorlands crying,
Thro\' the cypress forests sighing,
In the night-wind madly flying,
Hellish forms with streaming hair;
In the barren branches creaking,
By the stagnant swamp-pools speaking,
Past the shore-cliffs ever shrieking,
Damn\'d demons of despair.

Once, I think I half remember,
Ere the grey skies of November
Quench\'d my youth\'s aspiring ember,
Liv\'d there such a thing as bliss;
Skies that now are dark were beaming,
Bold and azure, splendid seeming
Till I learn\'d it all was dreaming --
Deadly drowsiness of Dis.

But the stream of Time, swift flowing,
Brings the torment of half-knowing --
Dimly rushing, blindly going
Past the never-trodden lea;
And the voyager, repining,
Sees the wicked death-fires shining,
Hears the wicked petrel\'s whining
As he helpless drifts to sea.

Evil wings in ether beating;
Vultures at the spirit eating;
Things unseen forever fleeting
Black against the leering sky.
Ghastly shades of bygone gladness,
Clawing fiends of future sadness,
Mingle in a cloud of madness
Ever on the soul to lie.

Thus the living, lone and sobbing,
In the throes of anguish throbbing,
With the loathsome Furies robbing
Night and noon of peace and rest.
But beyond the groans and grating
Of abhorrent Life, is waiting
Sweet Oblivion, culminating
All the years of fruitless quest.', user: lovecraft)

testpost6 = Post.create!(title: 'I\ve a Pain in my Head', content: '\'I\'ve a pain in my head\'
Said the suffering Beckford;
To her Doctor so dread.
\'Oh! what shall I take for\'t?\'

Said this Doctor so dread
Whose name it was Newnham.
\'For this pain in your head
Ah! What can you do Ma\'am?\'

Said Miss Beckford, \'Suppose
If you think there\'s no risk,
I take a good Dose
Of calomel brisk.\'--

\'What a praise worthy Notion.\'
Replied Mr. Newnham.
\'You shall have such a potion
And so will I too Ma\'am.\'', user: robert)

puts "#{Post.count} Posts created!"









