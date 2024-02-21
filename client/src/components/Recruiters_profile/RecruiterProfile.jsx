import React from 'react'
import ReactQuill from 'react-quill';
import RecruiterCSS from './recruiterProfile.module.css';
import ProfilePic from '../User_profile/ProfilePic';
import ImageCropper from './ImageCropper';

const RecruiterProfile = () => {
    const industryTypes = [
        "3D Printing",
        "Accounting",
        "Advanced Manufacturing",
        "Airlines/Aviation",
        "Advertising Technology",
        "Agriculture",
        "Animation",
        "Apparel & Fashion",
        "Architecture & Planning",
        "Arts and Crafts",
        "Automotive",
        "Banking",
        "Biotechnology",
        "Broadcast Media",
        "Building Materials",
        "Business Supplies and Equipment",
        "Capital Markets",
        "Chemicals",
        "Civic & Social Organization",
        "Civil Engineering",
        "Commercial Real Estate",
        "Computer & Network Security",
        "Computer Games",
        "Computer Hardware",
        "Computer Networking",
        "Computer Software",
        "Construction",
        "Consumer Electronics",
        "Consumer Goods",
        "Consumer Services",
        "Cosmetics",
        "Dairy",
        "Defense & Space",
        "Design",
        "Education Management",
        "E-Learning",
        "Electrical/Electronic Manufacturing",
        "Entertainment",
        "Environmental Services",
        "Events Services",
        "Executive Office",
        "Facilities Services",
        "Farming",
        "Financial Services",
        "Fine Art",
        "Fishery",
        "Food & Beverages",
        "Food Production",
        "Fund-Raising",
        "Furniture",
        "Glass, Ceramics & Concrete",
        "Government Administration",
        "Government Relations",
        "Graphic Design",
        "Health, Wellness and Fitness",
        "Higher Education",
        "Hospital & Health Care",
        "Hospitality",
        "Human Resources",
        "Import and Export",
        "Individual & Family Services",
        "Industrial Automation",
        "Information Services",
        "Information Technology and Services",
        "Insurance",
        "International Trade and Development",
        "Internet",
        "Investment Banking",
        "Investment Management",
        "Judiciary",
        "Law",
        "Legislative Office",
        "Leisure, Travel & Tourism",
        "Libraries",
        "Logistics and Supply Chain",
        "Luxury Goods & Jewelry",
        "Machinery",
        "Management Consulting",
        "Maritime",
        "Marketing and Advertising",
        "Mechanical or Industrial Engineering",
        "Media Production",
        "Medical Devices",
        "Medical Practice",
        "Mental Health Care",
        "Military",
        "Mining & Metals",
        "Motion Pictures and Film",
        "Music",
        "Nanotechnology",
        "Newspapers",
        "Non-Profit Organization Management",
        "Oil & Energy",
        "Online Media",
        "Outsourcing/Offshoring",
        "Package/Freight Delivery",
        "Packaging and Containers",
        "Paper & Forest Products",
        "Performing Arts",
        "Pharmaceuticals",
        "Philanthropy",
        "Photography",
        "Plastics",
        "Political Organization",
        "Primary/Secondary Education",
        "Printing",
        "Professional Training & Coaching",
        "Program Development",
        "Public Policy",
        "Public Relations and Communications",
        "Public Safety",
        "Publishing",
        "Railroad Manufacture",
        "Ranching",
        "Real Estate",
        "Recreational Facilities and Services",
        "Religious Institutions",
        "Renewables & Environment",
        "Research",
        "Restaurants",
        "Retail",
        "Security and Investigations",
        "Semiconductors",
        "Shipbuilding",
        "Sporting Goods",
        "Sports",
        "Staffing and Recruiting",
        "Supermarkets",
        "Telecommunications",
        "Textiles",
        "Think Tanks",
        "Translation and Localization",
        "Transportation/Trucking/Railroad",
        "Utilities",
        "Venture Capital & Private Equity",
        "Veterinary",
        "Warehousing",
        "Wholesale",
        "Wine and Spirits",
        "Wireless",
        "Writing and Editing"
    ];
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };


    return (
        <div className='container'
            style={{
                height: 'auto',
                borderRadius: '10px',
                padding: '10vw',
            }}
        >
            <form>
                <div className="form-row mt-3">
                    <div className="form-group col-md-6">
                        <label htmlFor="companyName" className='text-dark'> Company Name  <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Enter Company Name' />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="Designation" className='text-dark'> Designation <span className='text-danger'>*</span> </label>
                        <input type="text" className='form-control' placeholder='Enter Designation' />
                    </div>
                </div>

                <div className='form-row mt-3'>
                    <div className="form-group col-md-6">
                        <label htmlFor="NoOfEmployees"> No of Employees </label>
                        <select className='form-control'>
                            <option value="1-10"> 1-10 </option>
                            <option value="11-50"> 11-50 </option>
                            <option value="51-200"> 51-200 </option>
                            <option value="201-500">201-500</option>
                            <option value="501-1000">501-1000</option>
                            <option value="1000-5000">1000-5000 </option>
                            <option value="5000+">5000+ </option>
                        </select>
                    </div>
                    {/* Country API for HeadQuarters */}
                    <div className="form-group col-md-6">
                        <label htmlFor="HeadQuarters"> HeadQuarters <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Enter HeadQuarters' />
                    </div>
                </div>
                <div className='form-row mt-3'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="industryType"> Industry Type <span className='text-danger'>*</span> </label>
                        <select className='form-control'>
                            {industryTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="companyType"> Company Type <span className='text-danger'>*</span> </label>
                        <select className='form-control'>
                            <option value="Private"> Private </option>
                            <option value="Public"> Public </option>
                            <option value="Government"> Government </option>
                            <option value="NGO"> NGO </option>
                            <option value="Other"> Other </option>
                        </select>
                    </div>
                </div>
                <div className='form-row mt-3'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="companyWebsite"> Company Website </label>
                        <input type="url" className='form-control' placeholder='www.yourcompanyname.com' />
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="CompanyTagline"> Company Tagline </label>
                        <input type="text" className='form-control' placeholder='Enter Company Tagline'/>
                    </div>
                </div>
                <div className='form-row mt-3'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="twitter"> X (Formerly Twitter) </label>
                        <input type="url" className='form-control' placeholder='https://twitter.com/yourusername' />
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="linkedIn"> LinkedIn </label>
                        <input type="url" className='form-control' placeholder='https://www.linkedin.com/yourusername' />
                    </div>
                </div>
                <div className='form-row mt-3'>
                    <div className='form-group col-md-6'>
                        <label htmlFor="companyDescription"> About Company <span className='text-danger'>*</span></label>
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            // formats={formats}
                            placeholder='Write something about your company'
                        />
                    </div>
                    <div className='form-group col-md-6'>
                        <label htmlFor="companyLogo"> Company Logo </label>
                        <input type="file" className='form-control' />
                        {/* <ImageCropper /> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RecruiterProfile
