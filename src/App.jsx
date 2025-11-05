const base = import.meta.env.BASE_URL.replace(/\/$/, "");
import { useMemo, useState } from "react"; // Import React hooks used for state  ← 
import "./App.css"; // Bring in styles for layout 


// image of the story, All images are put into one array
// sidebars filter by this. category for displaying images in different headers and easily know which one will go to each blank space
const IMAGE_STORY = [
  // "snowfall", "city", "man", "girl", "street", "festival" ,"sunrise", "ending"

  // snowfall
  { id: "1",  url: `${base}/images/snowday_light.jpg`,     title: "Light Snow Fall",      category: "snowfall" },
  { id: "2",  url: `${base}/images/snowday_hard.jpg`,      title: "Hard Snow Fall",       category: "snowfall" },
  { id: "3",  url: `${base}/images/snowday_freezing.jpg`,  title: "Freezing Snow",        category: "snowfall" },

  // city
  { id: "4",  url: `${base}/images/city_london.jpg`,       title: "City London",          category: "city" },
  { id: "5",  url: `${base}/images/city_newyork.jpg`,      title: "City NewYork",         category: "city" },
  { id: "6",  url: `${base}/images/city_uk.jpg`,           title: "City UK",              category: "city" },

  // man
  { id: "7",  url: `${base}/images/man_1.jpeg`,            title: "Man 1",                category: "man" },
  { id: "8",  url: `${base}/images/man_2.png`,             title: "Man 2",                category: "man" },
  { id: "9",  url: `${base}/images/man_3.jpeg`,            title: "Man 3",                category: "man" },

  // girl
  { id: "10", url: `${base}/images/girl_1.jpeg`,           title: "Girl 1",               category: "girl" },
  { id: "11", url: `${base}/images/girl_2.jpeg`,           title: "Girl 2",               category: "girl" },
  { id: "12", url: `${base}/images/girl_3.jpeg`,           title: "Girl 3",               category: "girl" },

  // street
  { id: "13", url: `${base}/images/street_bythepier.jpg`,  title: "Street By the Pier",   category: "street" },
  { id: "14", url: `${base}/images/street_streetlight.jpg`,title: "Street Street Light",  category: "street" },
  { id: "15", url: `${base}/images/street_treelight.jpg`,  title: "Street Tree Light",    category: "street" },

  // festival
  { id: "16", url: `${base}/images/festival_europe.jpg`,   title: "Festival Europe",      category: "festival" },
  { id: "17", url: `${base}/images/festival_newyork.jpg`,  title: "Festival NewYork",     category: "festival" },
  { id: "18", url: `${base}/images/festival_trier.jpg`,    title: "Festival Trier",       category: "festival" },

  // sunrise
  { id: "19", url: `${base}/images/sunrise_bysea.jpg`,     title: "Sunrise BySea",        category: "sunrise" },
  { id: "20", url: `${base}/images/sunrise_city.jpg`,      title: "Sunrise City",         category: "sunrise" },
  { id: "21", url: `${base}/images/sunrise_onsnow.jpg`,    title: "Sunrise OnSnow",       category: "sunrise" },

  // ending
  { id: "22", url: `${base}/images/christmas_friend.jpg`,  title: "Ending with Friend",   category: "ending" },
  { id: "23", url: `${base}/images/christmas_home.jpg`,    title: "Ending at Home",       category: "ending" },
  { id: "24", url: `${base}/images/christmas_newyork.jpg`, title: "Ending in New York",   category: "ending" },
]; 



//Story is split into text segments. An image slot will appear
//between every two segments (segments.length - 1 slots). An inline slot is inserted after each segment except the last.

const STORY_SEGMENTS = [
  "That night was cold. So cold",
  "Snowflakes kept landing on my short hair. Their presence seemed intent on making me look even more disheveled, with only yesterday’s clothes on my back. I was sure I was not a pleasant sight. People simply flowed past me. They glanced for a second and moved on. A few stopped to listen as I sang with my guitar. Then a beat or two later they left. Maybe they paused out of pity. Watching a young man like me sing without a voice. But it is all right, I am happy with just this. I do not really need attention. I am here only to sing. To share my odd little hobby every Christmas Eve. Even though each year this city grows quieter, swallowed by cities that have leapt ahead.",
  "When the night was nearly over, I noticed a little girl watching me from a distance. A pretty girl of about ten years old, or perhaps a bit younger. Her body looked cold. Her ears were bare and red. Her earmuffs hung listlessly from her wrist.At first I paid her no mind. As I kept singing, she kept watching from afar. Sometimes she smiled. Sometimes her stare was blank. I began to pack up after a while. Even then she stood there as if curious about me. Interesting, I thought for a moment. Then I left for home. The next Christmas was still cold. Snow fell heavier as the city’s population thinned. My favorite guitar kept me company again tonight. The cold could not beat the joy I felt every Christmas. A day when I felt free. A day when everyone was busy with loved ones and no one paid me any attention. So I sang and kept on singing in silence, satisfied.",
  "The night was ending quickly again. I scanned the street before heading home. I looked one way and the other, and I froze. The little girl had come back. I did not know why, but I felt glad to see her again. And curious.Curious about who she was. The little girl who waited faithfully from afar when others ignored me. She never came closer, only stood in place. You might call it stalking. But it was a pity. She had come too late. The night was nearly over and I had to go home. I could not bear to see her sad as I packed up. Yet what could I do. If I did not go home, I did not know what they would do to me.Another year passed. Snow took up its duty again. It kept Christmas company once more. And it kept the little girl company too, when she arrived at the end of the night. As always, she showed up with less than ten minutes to spare and I had to leave her there. So it was the next Christmas, and the next, and the next. Late or not, every year she still came.",
  "She watched from a distance. She seemed to listen and sometimes moved as if following the notes. I knew she could not really hear me because I only sang in silence. So why did she do it. To mock me. To toy with me. Or could she truly hear the voice of my heart when I sang. It was confusing. Without realizing it, part of me had made that little girl someone important in my life. Even if I saw her only on Christmas and only from far away. Just watching her strange little ways. I thought we were comfortable with that. Christmas Eve came once more. Before I knew it, wanting to see the little girl had become my purpose. For the first time, singing was not my focus. I arrived earlier than usual. I knew she would not appear until the end of the night. What else can I do, she will always be late. Or maybe I will try to approach her later, I told myself. I did not expect what came next. The sun peeked out and urged the snow to go home, yet she still had not appeared. The little girl did not come. Could it be true that she was not coming. After faithfully keeping me company every year. I could not believe it. Christmas was a disappointment this time. I even refused to go home, just to wait for her. I sat there thinking, and fretting over the trouble I would be in for not going home. Then the word home made me go still. I froze and remembered. I grabbed my things and ran without caring about anything else. How could I have forgotten to go home. What would they do to me if I did not return. In that moment I began to let go of the matter of the little girl and thought about the year ahead. A year that would feel very long.My guess was right. This year felt endless. Not for the reason I had expected. It felt long because of the little girl. I could not stop thinking about her. What had happened to her last year. Had misfortune struck and left her ill. Was she forced to leave and wander far away. Or the worst of it, had she grown tired of seeing me. Every possibility raced through my small mind. They led me to decide not to sing tonight. I would look for her instead.My resolve was firm. The trouble was, I did not know where to begin. All I knew was the place where she always waited, her face, and the earmuffs in her hand. So there I sat, still and quiet, in that very spot. On a wooden bench leaning back beneath the glow of a streetlamp. The streetlamp cast a dim yellow light, yet it felt warm",
  "I waited for her to come. I looked this way and that. I stood and walked, then sat again. I tried every way I could at first. My body stiffened with cold as snow covered the street. My skin reddened with the cold as the color of the night sky shifted. Still I waited for her. Five hours passed. At last I gave up. It was midnight and she had not come. To be precise, she would not be coming. I decided to head home along the now empty road. The snow escorted me as I turned at the end of the alley. Then something collided with me. I heard short, quick breaths. I looked at the thing that struck me and I was stunned. The pretty little girl stood before me. She barely reached my shoulder and she was thin. She smiled wide to see me, yet said nothing. We stood there staring at each other for minutes. Then she reached into her pocket and pulled out a small notebook with an embroidered wooden cover. She wrote something in it and handed it to me. “Why did you not sing today.” That was what she had written. I wrote back without asking why she was not speaking. “To look for you, little girl. I have watched you for a long time. Where were you last year.” I gave the notebook back. She did not answer. It seemed I had asked the wrong question. I took the notebook again and wrote, “Come walk around the city with me.” Her eyes lit up at once. She grabbed my hand and pulled me toward the city center. To the place where the Christmas festivities were held. ****",
  "She made this the best night of my life. A cold, snowy night I never thought could be so beautiful. We kept enjoying the celebration and wandered through the city. Two loops, four loops, we did not care. I was so happy that I forgot to go home. I think the little girl felt the same. Even though we spoke only by writing in the notebook, we were completely content. Joy does not tire, but our bodies do. When the sky began to change color, we took a rest again. We sat on the bench with the backrest, the one we felt belonged to us. I watched her write in her notebook. Thank you for tonight, it said. “Of course, we can do this again next year.” She did not answer. Her face dipped sadly as she wrote. “I will not be able to. The orphanage will move me to another city tomorrow.” I was taken aback. I looked at her gently and wrote again. “Is that true.” I asked, doubtful, because I knew that orphanage, the only one in the city. It was the orphanage that had sent me to them. The ones who adopted and enslaved the children. I did not want the little girl to become what I had been. Surely they had already hurt her. A flood of hatred rose in my heart and without realizing it she had written again. “It is true, I volunteered to go in my only friend’s place, and that was what kept me away last year.” Her words left me awestruck. And sad for her. “So you know what that orphanage will do.” She smiled and nodded. I decided to tell her my story, how I had once been a child from that orphanage. At the end of it she cried. People at the roadside café glanced at us for a moment. Then returned to what they were doing. I busied myself comforting her. “Why are you crying.” I wrote in her small notebook. She wiped her tears and wrote. “You must be very sad.” She was sad for me. What about herself. “Are you not sad that you have to go there.” “No. You have already been through it. I do not yet know what will happen.” Then I began to think. How could I keep her from suffering at their hands.That morning, right then, I drifted into a long reverie. She waited patiently while the sun climbed.",
  "After an hour, I snatched her notebook, which startled her. I had weighed every possibility, and this was the only way. I wrote it in her book. “Come away with me.” She read it and looked at me. Slowly she wrote. “May I?”I must have looked very unreliable. But I had done the math, and this choice held me steady on my feet. I reached out my hand to invite her. As I hoped, her hand began to reach for mine. Then she stopped halfway, as if something held her back. She pulled her hand away to take the notebook and wrote. “But… I am deaf.” Those words woke me and made my mind move faster. I thought of why she would not speak, why she only wrote, why she seemed unaware of the sounds around her. It all made sense together. Even so, it did not stop me. I took her hand and took the notebook. I uncapped the pen slowly. Everything felt still as I wrote. The little girl watched me, full of hope and tension. I gave the notebook back to her. Her eyes moved as she read what I had written. Then her eyes lifted to me with a smile on her face. This time she was the one who took my hand. We ran away from this city, and from that moment our lives changed. From the moment I wrote those two words in her notebook. Two words, “I am mute.”",
  " - THE END - ",
];

// hint inside the slot for images category
const SLOT_TARGETS = ["snowfall", "city", "man", "girl", "street", "festival" ,"sunrise","ending"]; 
const SLOT_HINTS = Array.from(
  { length: Math.max(STORY_SEGMENTS.length - 1, 0) },
  (_, i) => (i % SLOT_TARGETS.length) + 1
);


// Sidebar shows a grid of draggable thumbnails. This sidebar displays images grouped by category.
function Sidebar({ images, onDragStart, title, groups, onUpload }) {
  // If the 'groups' prop is provided, render multiple category sections in the sidebar
  // 'groups' help categorize the images into different sections in the sidebar
  if (groups && groups.length) {
    return (
      <aside className="sidebar">
        {/* Iterate through each group and render a section for each */}
        {groups.map((group, gi) => (
          <section key={`grp-${gi}`}>
            <h2 className="sidebarTitle">{group.title}</h2>  {/* Display the title of the category */}

            {/* 3-column grid for displaying image thumbnails in each category */}
            <div className="thumb-grid">
              {group.images.map((img) => (
                <div
                  key={img.id}
                  className="thumb"  // Wrap each image in a thumbnail div
                  draggable  // Make it draggable
                  onDragStart={(e) => onDragStart(e, img)}  // Handle when an image starts being dragged
                  aria-label={`Drag ${img.title} into the story`} // Accessibility label for dragging
                >
                  {/* Image thumbnail, displayed inside the grid */}
                  <img src={img.url} alt={img.title} />  {/* Image thumbnail for each image */}
                  <span className="thumbCaption">{img.title}</span> {/* Title of the image */}
                </div>
              ))}
            </div>

            {/* Upload button for each category */}
            <label className="upload__label" style={{ marginTop: 8 }}>
              {/* A hidden file input that triggers on file selection */}
              <input
                type="file"
                multiple  // Allow multiple files to be uploaded at once
                accept="image/*"  // Limit file selection to images only
                onChange={(e) => onUpload && onUpload(e, group.category)} // Call onUpload when files are selected, passing the category
              />
              Add {group.title} images  {/* Display the label of the category */}
            </label>
          </section>
        ))}
      </aside>
    );
  }
  // If 'groups' is not provided, render a default sidebar to display all images.
  return (
    <aside className="sidebar">
      <h2 className="sidebarTitle">{title}</h2> {/* Sidebar title (e.g., "Place" or "Smell") */}
      <div className="thumb-grid">
        {images.map((img) => (
          <div
            key={img.id}
            className="thumb"
            draggable // Make images draggable
            onDragStart={(e) => onDragStart(e, img)}  // Start drag event handler
            aria-label={`Drag ${img.title} into the story`} // Accessibility label
          >
            <img src={img.url} alt={img.title} />  {/* Display image thumbnail */}
            <span className="thumbCaption">{img.title}</span>  {/* Image title */}
          </div>
        ))}
      </div>
    </aside>
  );
}


// Inline, between-words drop target used inside a paragraph. Will be called from app return
// Displays a grey placeholder when empty
function InlineSlot({ slot, onDropToSlot, isHovering, onEnter, onLeave, onClear, hint }) { // ← CHANGED: added `hint` prop
  const hasImage = Boolean(slot.url); // tiny helper for a CSS hook
  return (
    <span
      className={`inline-slot ${isHovering ? "inline-slot-hover" : ""} ${hasImage ? "has-image" : ""}`} // ← CHANGED: added has-image class
      onDragOver={(e) => e.preventDefault()} // Allow drop by cancelling default
      // e for event ( React calls handler and injects the event as the first argument). Tells what happened and gives methods
      onDragEnter={() => onEnter(slot.id)} // Track which slot is hovered
      onDragLeave={() => onLeave(slot.id)} // Remove hover state
      onDrop={(e) => onDropToSlot(e, slot.id)} // Handle actual drop
      role="button"
      aria-label="Drop an image here"
      title="Drop an image here"
    >
        {/* faint watermark number to hint the target group */}
        <span className="inline-slot-hint">{hint}</span> {/* ← ADDED */}

        {/* Displays the inserted image + an "×" button when filled. */}
        {/* remove image, the x button */}
      {slot.url ? (    // If the slot has an image:
        <span className="inline-slot-imgWrap">
          <img className="inline-slot-img" src={slot.url} alt={slot.title } />
          <button 
            className="inline-slot-clear" 
            // Clear/remove image in this slot. The function in app
            onClick={() => onClear(slot.id)} 
            aria-label="Clear slot"> 
            ×
          </button>
        </span>
      ) : (
        // Grey box when empty
        <span className="inline-slot-placeholder" />
      )}
    </span>
  );
}

// the main app root. 3 columns; only middle scrolls.  manages everything and also upload. 
export default function App() {
    // setting up state getter and setters
  // images lets us read the state, setImages lets us change the state
  const [images, setImages] = useState(IMAGE_STORY);  // Source gallery for both sidebars

  // Create a slot where it's segments.length - 1

  const initialSlots = useMemo(
    () =>
        //   number of inline slots equals "gaps" between paragraphs
      Array.from({ length: Math.max(STORY_SEGMENTS.length - 1, 0) }, (_, i) => ({
        id: `slot-${i}`,
        url: null,  // empty = shows grey placeholder
        title: null,  // optional label when filled
      })),
    []
  );

  // setting up state getter and setters. Same like set images above.but use starting slots
  const [slots, setSlots] = useState(initialSlots);
  // lets us read the id of whatever image is being hovered/dragged. Can be for debugging
  // setDragged/hoveredSlotID id lets us change the id to be whatever image is being hovered/dragged

  //   UI hover tracking:
  const [hoveredSlotId, setHoveredSlotId] = useState(null);
  const [draggedFromId, setDraggedFromId] = useState(null);
  const [draggedId, setDraggedId] = useState(null); // ADDED: track which image is being dragged (state-first)

    // Adds uploaded images to the side galleries
    // Every upload point passes its own `category`, so files are auto-tagged
  function handleUpload(e, category) {
    //Adds uploaded images to the side galleries
    const files = Array.from(e.target.files || []);  //Getting the files and putting them into an array
    if (!files.length) return;

    // Map to gallery items. setting same info preload images have
    const created = files.map((file, idx) => ({ 
      id: `${Date.now()}-${idx}`, // simple unique id (timestamp + index)
      url: URL.createObjectURL(file),
      title: file.name,
      category, // category is supplied by the section 
    }));
     // updating the state of the images to include upload images 
    setImages((prev) => [...prev, ...created]);
    e.currentTarget.value = ""; // reset input to allow the same file to re-trigger onChange
  }

    // Start dragging a thumbnail.
  function beginDrag(e, img) {
    // putting JSON in dataTransfer lets any drop zone understand the payload. Use e events again
    // remember which image is being dragged
    setDraggedId(img.id);
    setDraggedFromId(img.id); 
  }

//   Drop a dragged image into a specific inline slot
//  Uses `draggedId` to find the image, then writes its url/title into that slot
  function dropOnSlot(e, slotId) {
    e.preventDefault();
    //  use draggedId to find the dragged image 
    if (!draggedId) return;
    const draggedImage = images.find((i) => i.id === draggedId);
    if (!draggedImage) return;

    setSlots((prev) =>
      prev.map((s) =>
        s.id === slotId ? { ...s, url: draggedImage.url, title: draggedImage.title ?? null } : s
      )
    );
    
    // set dragged id and hover id back to null because nothing is being hovered over or dragged
    setHoveredSlotId(null);
    setDraggedId(null);
    setDraggedFromId(null);
  }

// Remove the image from a slot and return it to beginning state/null
  function clearSlot(slotId) {
    setSlots((prev) => prev.map((s) => (s.id === slotId ? { ...s, url: null, title: null } : s)));
  }

  // filter per-category arrays so left/right show different categories
    const snowfall = images.filter((img) => img.category === "snowfall");
    const city = images.filter((img) => img.category === "city");
    const man = images.filter((img) => img.category === "man");
    const girl = images.filter((img) => img.category === "girl");
    const street = images.filter((img) => img.category === "street");
    const festival = images.filter((img) => img.category === "festival");
    const sunrise = images.filter((img) => img.category === "sunrise");
    const ending = images.filter((img) => img.category === "ending");

  //  right sidebar stacks multiple categories in the same panel
const rightGroups = [
  { title: "5. Street",   category: "street",   images: street }, 
  { title: "6. Festival", category: "festival", images: festival },
  { title: "7. Sunrise",  category: "sunrise",  images: sunrise },
  { title: "8. Ending",  category: "ending",  images: ending },
];

//  left sidebar can also stack multiple categories. left and right can be added
const leftGroups = [
  { title: "1. Snow Fall", category: "snowfall", images: snowfall }, 
  { title: "2. City",      category: "city",     images: city },
  { title: "3. Man",       category: "man",      images: man },
  { title: "4. Girl",      category: "girl",     images: girl },
];

  return (
    <div className="app">
       {/* LEFT : calling the sidebar function written above*/}
        <Sidebar
        groups={leftGroups}
        onDragStart={beginDrag}
        onUpload={handleUpload}
        title="Snowfall / City / Man / Girl"
        />

      {/* MIDDLE (only this scrolls) */}
      <main className="story-scroll">
        {/* ← ADDED: simple title + soft subtitle */}
        <header className="story-header">
          <h1 className="appTitle">TWO WORDS</h1>
          <p className="appSubtitle">Drag your story visualization</p>
        </header>

        <article className="story">
          {STORY_SEGMENTS.map((seg, i) => (
            <p key={`seg-${i}`} className="story__p">
              {seg}
              {i < STORY_SEGMENTS.length - 1 ? (
                // function written above
                <InlineSlot
                  slot={slots[i]}
                  onDropToSlot={dropOnSlot}
                  isHovering={hoveredSlotId === slots[i].id}
                  onEnter={setHoveredSlotId}
                  onLeave={() => setHoveredSlotId(null)}
                  onClear={clearSlot}
                  hint={SLOT_HINTS[i]} 
                />
              ) : null}
            </p>
          ))}
        </article>

      </main>

      {/* RIGHT: calling the sidebar function written above*/}
    <Sidebar
      groups={rightGroups}
      onDragStart={beginDrag}
      onUpload={handleUpload}
      title="Street / Festival / Sunrise / Ending"
    />
  </div>
  );
}
