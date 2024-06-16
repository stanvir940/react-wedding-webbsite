const Faq = () => {
  return (
    <div className=" md:">
      <div className="collapse collapse-plus bg-base-200 mt-5 md:mt-8 p-5">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-bold">
          Are your Wedding Planning Tools free?
        </div>
        <div className="collapse-content">
          <p>
            Yes, our Wedding Planning Tools are totally free! This includes our
            Wedding Websites, Wedding Seating Charts, Wedding Checklist, Wedding
            Budget tracker, Wedding Vendor Manager and so much more (like a
            wedding countdown!). Need we say more?
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-5 md:mt-8 p-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-bold">
          Do your planning tools include a Wedding Checklist?
        </div>
        <div className="collapse-content">
          <p>
            Yes, a Wedding Checklist is one of our free Wedding Planning Tools!
            It includes default tasks that you can easily customize as well as
            the ability to quikcly add or remove items to tailor to your
            specifications!
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-5 md:mt-8 p-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-bold">
          How do I use Wedding Planning Tools to plan my wedding?
        </div>
        <div className="collapse-content">
          <p>
            Our free Wedding Planning Tools help you plan every aspect of your
            wedding with guidance from those who have done it before. Start with
            your Wedding Budget, Wedding Guest List and Wedding Checklist, then
            create your Wedding Website to share all the important details and
            communicate with guests. You can even collect RSVPs on your Wedding
            Website and use the Seating Chart to easily plan where your guests
            will sit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
