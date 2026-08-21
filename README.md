# Visual Storyteller

Use My Uploaded Images and Videos as Core Portfolio Content

I will provide a set of images, posters, graphic-design works, thumbnails, photographs, edited visuals, and videos along with this prompt.

Do not treat these assets as simple placeholders or dump them into a gallery.

First analyze every uploaded image and video visually, understand its subject, composition, colors, mood, aspect ratio, visual importance, and whether it works best as a background, foreground artwork, project showcase, transition element, video preview, texture, or supporting media.

Then place each asset in the website wherever it creates the strongest visual composition and storytelling experience.

You are allowed to make intelligent creative decisions about where each asset should appear.

Asset Placement Rules

For each uploaded asset, determine whether it works best as:

Fullscreen hero media

Large background artwork

Scroll-linked parallax background

Foreground project artwork

Pinned project image

Horizontal gallery artwork

Video showcase

Project thumbnail

Section transition media

Masked typography background

Decorative layered visual

About-section artwork

Project detail gallery

Mobile-specific alternative

Do not force every asset into the homepage.

Use the strongest assets prominently and place secondary assets inside project detail pages or supporting galleries.

Maintain the original visual quality and do not crop important subjects unnecessarily.

Spider-Man Artwork Example

If one of the supplied assets is a Spider-Man image/artwork, consider using it as an immersive background visual if its composition supports it.

For example, create a section where the Spider-Man artwork exists behind the foreground content and participates in scrolling.

The background must NOT behave like a simple CSS fixed background.

Instead, build a proper GSAP ScrollTrigger parallax sequence.

Conceptually:

Foreground typography         normal scroll / fastest
Project information           slightly slower
Spider-Man artwork            noticeably slower
Background texture            very slow


As the user scrolls downward, the foreground content should move normally while the Spider-Man artwork moves downward/upward at a different speed, creating the illusion of depth.

The artwork can begin partially outside the viewport and gradually reveal more of the character while scrolling.

For example:

INITIAL VIEW

      HUGE TYPOGRAPHY

                [partial Spider-Man artwork]
                     ↓
                     ↓ scroll

MIDDLE

          [larger visible Spider-Man artwork]

       PROJECT TITLE
       GRAPHIC DESIGN / POSTER

                     ↓
                     ↓ scroll

END

       [Spider-Man artwork moves behind content]

              NEXT PROJECT


Do not mechanically copy this exact positioning.

Analyze the actual Spider-Man image first.

If the character is positioned on the right side, preserve that composition and place typography on the opposite side.

If the image has strong negative space, use that negative space for text.

If the subject occupies most of the frame, consider letting the artwork scale beyond the viewport and use it as an environmental layer instead.

Scroll-Linked Background Behavior

For selected strong artwork, create reusable components such as:

ParallaxBackground
LayeredArtwork
ScrollMediaScene
PinnedArtwork


Allow each artwork to have configurable parameters such as:

speed
scaleFrom
scaleTo
yFrom
yTo
opacityFrom
opacityTo
rotation
pinDuration


Use GSAP ScrollTrigger with scrub so the artwork animation is tied directly to scroll progress.

Example behavior:

image scale:       1.08 → 1.00
vertical position: 12vh → -10vh
opacity:           0.75 → 1


These values are examples only.

Tune them according to the actual uploaded media.

Animations should feel slow, cinematic and weighted.

Do not create excessive movement that makes the artwork difficult to appreciate.

Layer Images to Create Depth

When appropriate, divide a section visually into multiple layers:

Layer 1 — film grain / texture
Layer 2 — large uploaded artwork
Layer 3 — another cropped design element
Layer 4 — typography
Layer 5 — metadata / CTA
Layer 6 — custom cursor


Different layers can move at slightly different speeds.

This should create the feeling of a motion-design composition rather than a conventional website.

Use Uploaded Videos Intelligently

Analyze every supplied video before deciding where it belongs.

Short visually impressive edits can be used as:

Hero showreel clips

Fullscreen video backgrounds

Project previews

Hover/tap previews

Pinned scroll scenes

Video-editing project case studies

Transition sequences

Do not autoplay every video simultaneously.

Only autoplay videos when they are visible and useful.

Use muted autoplay with playsInline where appropriate.

Pause or unload offscreen videos to improve performance.

Use a poster image before the video needs to play.

For particularly strong editing work, create an immersive sequence such as:

VIDEO EDITING

MOTION
IN EVERY
FRAME.

            [large video preview]

ROLE       Video Editing
YEAR       2026
DURATION   01:24

PLAY WITH SOUND ↗


Match Each Asset With the Right Design Style

Do not apply the exact same layout to every project.

Instead, use the nature of the supplied content.

For example:

Poster / Graphic Artwork

Use:

Giant fullscreen artwork

Slow image scaling

Typography layered over/behind artwork

Parallax

Mask reveals

Landscape Artwork

Use:

Wide cinematic sections

Edge-to-edge media

Horizontal movement

Portrait Artwork

Use:

Tall editorial compositions

Offset typography

Asymmetrical grids

Vertical parallax

Detailed Illustration

Allow the artwork to remain on screen longer so users can appreciate it.

Consider pinning the image while text moves beside it.

Video Editing Project

Prioritize playback and cinematic framing rather than static thumbnails.

Build Sections Around the Actual Assets

After examining the supplied assets, reorganize the homepage if necessary.

The asset quality should determine the final order rather than blindly following a fixed template.

For example, the final experience may become:

PRELOADER

↓
BEST VIDEO / SHOWREEL HERO

↓
INTRO TYPOGRAPHY

↓
SPIDER-MAN PARALLAX ARTWORK

↓
PROJECT 01

↓
FULLSCREEN GRAPHIC DESIGN

↓
VIDEO EDITING PROJECT

↓
HORIZONTAL POSTER GALLERY

↓
ANOTHER STRONG ARTWORK WITH PINNED SCROLL

↓
ABOUT

↓
SHOWREEL / MOTION SECTION

↓
CONTACT


The actual order should be chosen only after examining all supplied assets.

Use Subject-Aware Composition

When positioning uploaded images, pay attention to where the subject is located.

For example:

If a face or character is on the right side:

TEXT                         SUBJECT
████████                     [IMAGE]
████████                     [IMAGE]


Do not put text over the face unless it is an intentional design decision.

If an image has empty space on the left or right, use that negative space for typography.

Avoid arbitrary object-position: center.

Set image positioning individually per project when necessary.

Store controls in the project data, for example:

{
  objectPosition: "70% center",
  parallaxSpeed: 0.45,
  theme: "dark",
  textPosition: "left"
}


Create Visual Continuity Between Assets

Transitions between my uploaded projects should feel connected.

For example:

The color from the outgoing artwork can temporarily become the background of the next section.

An image can scale until it fills the viewport and become the background of the following section.

A video frame can freeze before transitioning into a related poster.

Typography can cross between scenes.

Use these techniques selectively.

The portfolio should feel like one continuous creative film rather than disconnected sections.

Important Creative Requirement

Do not merely display my work.

Art-direct the website around my work.

My uploaded images and videos should determine:

color moments,

spacing,

transitions,

section layouts,

parallax behavior,

background imagery,

typography placement,

and project sequence.

If an uploaded asset would look especially powerful as an animated background, use it that way.

If another asset works better as a clean fullscreen artwork, do not unnecessarily animate it.

If a video is visually stronger than the other media, prioritize it.

Make creative decisions based on the actual assets.

The goal is for someone visiting the portfolio to feel that the website itself is another design project created by the designer, while the supplied images and videos remain the stars of the experience.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
