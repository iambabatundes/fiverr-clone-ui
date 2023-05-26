import React, { useState } from "react";
import "../graphicsDesign/graphicsDesign.css";
import CategoryBanner from "../categoryBanner";
import CategorySlide from "../categorySlide";
import categorySlides from "../data";
import categoryCard from "../cardData";
import CategoryCard from "../categoryCard";
import Header from "../../header";
import GuideList from "./../../guides/guideList";
import CategoryAccordion from "../categoryAccordion";
import CategoryService from "../categoryService";

function GraphicsDesign() {
  const categoryGuide = [
    {
      id: 1,
      image:
        "https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/74773bd8aab051ef8a227380dc4abfc9-1651413395712/how%20to%20chhose%20a%20logo%20font.jpg",
      desc: "The 4 main types of fonts & how to choose the right font for your brand and logo",
      link: "/resource/guides/graphic-design/how-to",
    },
    {
      id: 2,
      image:
        "https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/6f05fb897084d76c87f86da4aece11b8-1649665467147/choosing%20brand%20colors-min.jpg",
      desc: "The ultimate guide to choosing the right colors for your brand",
      link: "/resource/guides/graphic-design/how-to",
    },
    {
      id: 3,
      image:
        "https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/2508960106117021baf4c9699b982213-1593436732817/children%27s%20book%20illustration.jpg",
      desc: "How to illustrate a children's book: 9 steps to illustrate your book",
      link: "/resource/guides/graphic-design/how-to",
    },
  ];

  const categoriesAccordion = [
    {
      title: `What is graphic design?`,
      description: `Put simply, graphic design is the art and craft of creating visual content that communicates a concept, an idea or a brand message to the public. Logos, artworks, drawings, illustrations, cards, emails and a whole paraphernalia of designs are all around us. You can see them in print and digital media, in shops, restaurants and cafes, on billboards, books and magazines, in the apps we use, the sites we visit and the physical and digital products we buy. In fact, graphic design is a type of communication medium which uses visual means to convey a message. Designers use different types of physical materials or software to combine images, graphics and text as the main forms of expressing this message. Graphic design is used to sell, 
      to build brand identity or to move people towards specific actions. 
      It is also a form of art but ultimately, 
      the different elements of the graphic representation influence our perceptions and emotions. 
      There are different types of graphic design such as 'visual identity' 
      which deals with the visual elements of the brand via shapes, colors and images 
      (e.g. logo design, typography, brand style guides) and 'marketing and advertising' 
      which is used directly to generate leads and sales via print (billboards, brochures, 
        flyers, print ads) or digital (social media posts, banners, videos). 
        There are many other types such as website design, industrial and product design, 
        fashion design, book and illustrations, motion graphics design used for example by 
        streamers or in gaming design and many others.`,
    },
    {
      title: `How to hire top graphic designers?`,
      description: `A captivating visual presence is very important whether 
      you're a business or a non-commercial entity. Your potential audiences are already 
      forming an opinion and deciding whether to interact with you based on what they see, 
      long before you've had a chance to say or write something. 
      So it's imperative to carefully select the right freelancer to meet your needs 
      and keep you within budget. There are many different areas in which graphic designers 
      specialize so if you want to hire the right talent to meet the requirements of your 
      particular project, here are some easy to follow tips and tricks. - 
      Always research their portfolio on Fiverr and ask for more examples if necessary; - 
      Carefully think about what your style and preferences are so you know what you like, 
      what you don't like and what you actually want (colors, graphics, images, etc); - 
      Write a clear brief - depending on the size of the project your brief can be very 
      short or contain a lot of detail. What's important is to be clear on the important points; - 
      Define a budget and be clear to yourself and the freelancer how far you can stretch it; - 
      Form a clear agreement on deadlines and revisions and respect the work of the designer - 
      if you are clear on the above points then there shouldn't be any surprises; - 
      Think long-term - a good designer will be able to help you holistically and develop 
      an evolving long-term vision for your product or service.`,
    },

    {
      title: `How much does it cost to hire a graphic designer`,
      description: `There is no simple answer to this question as graphic design is not a commodity or a product that has an exact way to be measured or priced. The great thing about Fiverr is that you can find a freelance graphic designer for any budget, starting from just $5 per gig and going up to hundreds or thousands of dollars for more complex and time and resource consuming requirements. However, there are a number of factors that will influence the final price of the project such as the level of experience of the seller (from novices to Top Rated and Pro Sellers), the number or service options included in the gig, delivery times, number of revisions and whether any extras might need to be added at some point. In fact, revisions can be a very tricky area for graphic design projects so it's key for you to have very clear requirements to start with and also to agree with the seller what their output will be (e.g.how many initial versions they will offer) to avoid any misunderstandings or unwanted surprises on both sides. A more experienced designer will charge more, however, they can also help you define your requirements and save time (and money) in the long-run by keeping you on track for your goals. Alternatively, a new freelancer who's perhaps less experienced or trying to build their reputation will be priced more competitively but might not have the skills or professional maturity of a seasoned creative director.`,
    },
    {
      title: "How do I write a good creative design brief?",
      description: `The creative brief is a key document that essentially defines the objectives, scope and key milestones of a design project. It gives the required information to the freelance graphic designer on what needs to be done, who the target audience will be, what key message(s) need to be communicated, what deliverables are expected, by when (deadlines and milestones). The creative brief is basically the blueprint that you'll need to agree with your internal stakeholders, business partners or colleagues (or if you are a one-person-show - find a friend or someone you trust to use as a sounding board) and then present to the freelancer to guide, inspire them and ensure they deliver the best possible creative results. Here are some universal tips for writing a good creative brief that equally apply to most: - Start by answering the ‘what' (your goal is) and ‘who' (your audience is); - Be clear, concise and to the point - less is more in this case so avoid being too prescriptive and don't elaborate too much; - Set realistic deadlines and factor in the time for feedback and revisions; - Ask for help - from your team, colleagues stakeholders; - Define what success will look like so both you and the designer can measure the results in the end (and stick to your initial definitions). Once you have all this, keep it as a template and use for future briefs as it'll save you time and will ensure you can build long-term relationships with the graphic designers you work with.`,
    },
    {
      title: `What's the best way to hire a designer in less than 48 hours?`,
      description: `Finding a good graphic designer is very important for the way your business and brand is presented to your target audience so you need to be very careful in who you put your trust in. You will need to get to grips with some graphic design 101's in order to become better at selection. Having said that, we know that sometimes there are business emergencies and you might find yourself in a situation when you need to hire a professional logo designer, illustration artist, front-end/UX or web designer or any type of freelance graphic designer in a hurry. The good news is that Fiverr can help you do that even if you only have 48 hours or less to complete your project. We have expert freelancers from around the globe, working 24/7 waiting to satisfy all your needs. Here's what to do: - Publish a buyer request so you can reach a big audience of freelancers who can offer you their services; - Clearly state your requirements, your budget and your deadline and sellers will start to contact you immediately; - Make sure to follow through with offers and ask relevant questions about experience, how the freelancer will approach the project, expectations about time and milestones before you decide to place an order; - Read buyer reviews and ask for additional portfolio examples if not sure; - Look for the seller rating (Fiver Top Rated and Pro sellers will command higher prices but will have more experience and skills).`,
    },
    {
      title: `What makes graphic design so important?`,
      description: `We live in a visual society so images, packaging, signage, illustrations, websites, apps and social media all vie for our attention, making it very challenging to become noticeable let alone memorable amongst the overload of visual stimuli. In a nutshell, the most important mission that graphic design plays is communication. Communication of ideas and messages, with the ultimate objective of elicit, prompt or evoke an action or an emotion (which will become an action in the future). So a good graphic designer will build your logo, create your email campaign or company stationery, do everything possible (given the right brief) to set you apart from your competition and convey a message that exudes trust, credibility and builds a consistent brand and company reputation. A well executed design project will ensure that the final output, be it a flyer or your product packaging, or even the design of your office space or your frontline staff's uniforms summarizes your mission and vision statements and communicates in a clear and simple manner the main ideas that are behind your company or organization and what it stands for. When you hire a good graphic design professional, preferably one you can trust on more than one project, they will ensure that all representations of your products and brand are visually consistent, recognizable and conveying a clear message. Ultimately, when you ask yourself ‘How important is it that my customers recognize me?', if the answer is ‘very important' then so should graphic design be for your brand!`,
    },
  ];

  const [showVideo, setShowVideo] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [openAccordions, setOpenAccordions] = useState(
    new Array(categoriesAccordion.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const newOpenAccordions = [...openAccordions];
    newOpenAccordions[index] = !newOpenAccordions[index];
    setOpenAccordions(newOpenAccordions);
  };

  const handleNextSlide = () => {
    const nextIndex = (currentSlideIndex + 5) % (categorySlides.length - 5);
    setCurrentSlideIndex(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex =
      (currentSlideIndex + categorySlides.length - 1) %
      (categorySlides.length - 5);
    setCurrentSlideIndex(prevIndex);
  };

  const slideToDisplay = categorySlides.slice(
    currentSlideIndex,
    currentSlideIndex + 5
  );

  const disableNextArrow = currentSlideIndex >= categorySlides.length + 1;
  const disablePrevArrow = currentSlideIndex <= 9;

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="graphic-design">
      <div className="graphic-design-main">
        <CategoryBanner
          title="Graphics & Design"
          subtitle="Designs to make you stand out."
          imageUrl="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415203/graphics-design-desktop.png"
          videoUrl="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works"
          handleVideoClick={handleVideoClick}
          showVideo={showVideo}
          works="How Fiverr Works"
        />

        <div className="categorySlides-main">
          <h1>Most popular in Graphics & Design</h1>
          <div>
            <button
              className="categoryslides-slides-button category-slider-button-prev"
              onClick={handlePrevSlide}
              disabled={disablePrevArrow}
              style={{ transition: "all 0s ease 0s" }}
            >
              <span className="categoryslides-slider-button-icon">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </span>
            </button>
            <button
              className="categoryslides-slides-button category-slider-button-next"
              onClick={handleNextSlide}
              disabled={disableNextArrow}
              style={{ transition: "all 0s ease 0s" }}
            >
              <span className="categoryslides-slider-button-icon">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="categorySlides">
          {slideToDisplay.map((categorySlide) => (
            <CategorySlide item={categorySlide} key={categorySlide.id} />
          ))}
        </div>

        <div className="categoryCard">
          <CategoryCard />
        </div>

        <Header
          title="Graphics & Design Related Guides"
          subtitle="See More Guides"
          className="guides-card-header"
        />

        <div className="guides-card">
          {categoryGuide.map((guide) => (
            <GuideList item={guide} key={guide.id} className="categoryGuide" />
          ))}
        </div>
      </div>

      <section className="categoryAccordion">
        <h2>Graphics & Design FAQs</h2>
        {categoriesAccordion.map((accordion, index) => (
          <CategoryAccordion
            item={accordion}
            key={accordion.title}
            isOpen={openAccordions[index]}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </section>
      <div className="category-services-container">
        <h2>Services Related To Graphics & Design</h2>

        <CategoryService />
      </div>
    </section>
  );
}

export default GraphicsDesign;
