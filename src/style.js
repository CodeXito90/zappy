// the styles are defined in this file and can then
// be declared in the components for ease of styling and 
// customization globally. 

const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold text-center xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]  py-10",
    heading3: "font-poppins font-semibold xs:text-[48px] text-[40px] text-pink xs:leading-[76.8px] leading-[66.8px] w-full py-10",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    paragraph2: "font-poppins font-semibold text-dimBlack text-[20px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start ",
    flexEnd: "flex justify-center items-end",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionInfo2: `flex-1 ${styles.flexStart} flex-col pl-5`,
  };
  
  export default styles;