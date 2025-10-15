const OfficeLocation = () => {
  return (
    <div className="py- bg-white rounded-lg">
      <iframe
        className="h-[480px] xl:h-[600px] w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6566275686887!2d90.34274169999999!3d23.866323899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c36bf5575275%3A0xbf06fa0fed94b9c0!2z4Kas4Kaf4Kak4Kay4Ka-IOCmt-CmvuCmnyDgpqvgpr_gpp8!5e0!3m2!1sen!2sbd!4v1760427398053!5m2!1sen!2sbd"
        width="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OfficeLocation;
