import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import 'animate.css';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import CheckBox from "./CheckBox";
import { GetCourse, courseFilterAction } from '../../redux/actions/courseAdmin';


const LeftSidebar = ({ onClose }) => {
  const btnRef = React.useRef();

  const dispatch = useDispatch();

  const [courseValueFilter, setCourseValueFilter] = useState({
      isFree: false,
      isPaid: false
  })

  const [locationTypeFilter, setLocationTypeFilter] = useState({
      Online: false,
      Offline: false,
  })

  const [courseTypesFilter, setCourseTypesFilter] = useState({
      Bachelors: false,
      Masters: false,
      Diploma: false,
      Professional: false,
      ShortCourse: false,
      Bootcamp: false,
  });

  const [courseLangFilter, setCourseLangFilter] = useState({
      English: false,
      Spanish: false,
      French: false,
      Italian: false,
      Portuguese: false,
      German: false,
      Catalan: false,
  });

  const [categoriesFilter, setCategoriesFilter] = useState({
      Culinary: false,
      Business: false,
      PersonalDevelopment: false,
      Marketing: false,
      HumanResource: false,
      LeadershipAndManagement: false,
      Language: false,
      TestPreparation: false,
      Pastry: false,
      CruisesManagement: false,
      Oenology: false,
      HospitalityManagement: false,
      SalesAndMarketing: false,
      EventManagement: false,
      RevenueManagement: false,
      Reception: false,
      FoodAndBeverages: false,
      Spa: false,
      Tourism: false,
      BusinessSkills: false
  })

  useEffect(() => {
      dispatch(GetCourse());
  }, [dispatch]);


  const handleClearAllFilters = () => {
      setCourseTypesFilter({
          Bachelors: false,
          Masters: false,
          Diploma: false,
          Professional: false,
          ShortCourse: false,
          Bootcamp: false,
      });


      setCourseLangFilter({
          English: false,
          Spanish: false,
          French: false,
          Italian: false,
          Portuguese: false,
          German: false,
          Catalan: false,
      });

      setCategoriesFilter({
          Culinary: false,
          Business: false,
          PersonalDevelopment: false,
          Marketing: false,
          HumanResource: false,
          LeadershipAndManagement: false,
          Language: false,
          TestPreparation: false,
          Pastry: false,
          CruisesManagement: false,
          Oenology: false,
          HospitalityManagement: false,
          SalesAndMarketing: false,
          EventManagement: false,
          RevenueManagement: false,
          Reception: false,
          FoodAndBeverages: false,
          Spa: false,
          Tourism: false,
          BusinessSkills: false
      })

      setLocationTypeFilter({
          Online: false,
          Offline: false,
      })

      setCourseValueFilter({
          isFree: false,
          isPaid: false
      })
  }

  const handleCoursesFilter = async () => {
      const params = new URLSearchParams({
          courseTypesFilter: JSON.stringify(courseTypesFilter),
          courseLangFilter: JSON.stringify(courseLangFilter),
          categoriesFilter: JSON.stringify(categoriesFilter),
          locationTypeFilter: JSON.stringify(locationTypeFilter), // Online Offline
          courseValueFilter: JSON.stringify(courseValueFilter)    // Free Paid
      }).toString();

      console.log("Params \n");
      console.log(params);
      const response = await dispatch(courseFilterAction(params));
      if (response.success) {
          console.log(response.data);
      } else {
          console.log(response.message);
      }
  }


  useEffect(() => {
      handleCoursesFilter();
  }, [courseLangFilter,
      courseTypesFilter,
      categoriesFilter,
      courseValueFilter,
      locationTypeFilter,
  ])

  return (<>
    <div>

      <Drawer
        isOpen={true}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ maxWidth: "100%" }}>
          <DrawerCloseButton />
          <DrawerHeader>FILTER BY</DrawerHeader>

          <DrawerBody>
            <div className="ml-2 pb-3">
              <hr style={{ background: "#E4B49D" }} />


              <h6 className="font-weight-bold">Course Types</h6>
              <div className="ml-3">
                <CheckBox
                  content={"Bachelors"}
                  checked={courseTypesFilter.Bachelors}
                  onChange={(e) =>
                    setCourseTypesFilter(
                      { ...courseTypesFilter, Bachelors: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"Masters"}
                  checked={courseTypesFilter.Masters}
                  onChange={(e) =>
                    setCourseTypesFilter(
                      { ...courseTypesFilter, Masters: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"Diploma"}
                  checked={courseTypesFilter.Diploma}
                  onChange={(e) =>
                    setCourseTypesFilter(
                      { ...courseTypesFilter, Diploma: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"Professional"}
                  checked={courseTypesFilter.Professional}
                  onChange={(e) =>
                    setCourseTypesFilter(
                      { ...courseTypesFilter, Professional: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"ShortCourse"}
                  checked={courseTypesFilter.ShortCourse}
                  onChange={(e) =>
                    setCourseTypesFilter(
                      { ...courseTypesFilter, ShortCourse: e.target.checked }
                    )}
                />
              </div>

              <h6 className='font-weight-bold mt-3'> Course Value </h6>
              <div className="ml-3">
                <div class="form-check">
                  <input
                    onChange={
                      (e) => setCourseValueFilter(
                        { isFree: e.target.checked }
                      )}
                    checked={courseValueFilter.isFree}
                    class="form-check-input"
                    name="exampleRadios"
                    type="radio"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Free
                  </label>
                </div>
                <div class="form-check">
                  <input
                    onChange={
                      (e) => setCourseValueFilter(
                        { isPaid: e.target.checked }
                      )}
                    checked={courseValueFilter.isPaid}
                    class="form-check-input"
                    name="exampleRadios"
                    type="radio"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Paid
                  </label>
                </div>
              </div>
              <h6 className="font-weight-bold mt-3">Course Languages</h6>
              <div className="ml-3">
                <CheckBox
                  content={"English"}
                  checked={courseLangFilter.English}
                  onChange={(e) =>
                    setCourseLangFilter(
                      { ...courseLangFilter, English: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"Spanish"}
                  checked={courseLangFilter.Spanish}
                  onChange={(e) =>
                    setCourseLangFilter(
                      { ...courseLangFilter, Spanish: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"French"}
                  checked={courseLangFilter.French}
                  onChange={(e) =>
                    setCourseLangFilter(
                      { ...courseLangFilter, French: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"Catalan"}
                  checked={courseLangFilter.Catalan}
                  onChange={(e) =>
                    setCourseLangFilter(
                      { ...courseLangFilter, Catalan: e.target.checked }
                    )
                  }
                />
                <CheckBox
                  content={"Italian"}
                  checked={courseLangFilter.Italian}
                  onChange={(e) =>
                    setCourseLangFilter(
                      { ...courseLangFilter, Italian: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"Portuguese"}
                  checked={courseLangFilter.Portuguese}
                  onChange={(e) =>
                    setCourseLangFilter(
                      { ...courseLangFilter, Portuguese: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"German"}
                  checked={courseLangFilter.German}
                  onChange={(e) =>
                    setCourseLangFilter(
                      { ...courseLangFilter, German: e.target.checked }
                    )}
                />
              </div>

              <h6 className="font-weight-bold mt-3">Location Type</h6>
              <div className="ml-3">
                <CheckBox
                  content={"Online"}
                  checked={locationTypeFilter.Online}
                  onChange={(e) =>
                    setLocationTypeFilter(
                      { ...locationTypeFilter, Online: e.target.checked }
                    )}
                />
                <CheckBox
                  content={"Offline"}
                  checked={locationTypeFilter.Offline}
                  onChange={(e) =>
                    setLocationTypeFilter(
                      { ...locationTypeFilter, Offline: e.target.checked }
                    )}
                />
              </div>

              <h6 className="font-weight-bold mt-3">Categories</h6>
              <div className="ml-3">
                <CheckBox
                  content={"Culinary"}
                  checked={categoriesFilter.Culinary}
                  onChange={(e) =>
                    setCategoriesFilter(
                      { ...categoriesFilter, Culinary: e.target.checked }
                    )}
                />
                <CheckBox
                  onChange={(e) =>
                    setCategoriesFilter(
                      { ...categoriesFilter, Business: e.target.checked }
                    )}
                  content={"Business"}
                  checked={categoriesFilter.Business}
                />
                <CheckBox
                  onChange={(e) =>
                    setCategoriesFilter(
                      { ...categoriesFilter, PersonalDevelopment: e.target.checked }
                    )}
                  content={"Personal Development"}
                  checked={categoriesFilter.PersonalDevelopment}
                />
                <CheckBox
                  onChange={(e) =>
                    setCategoriesFilter(
                      { ...categoriesFilter, Marketing: e.target.checked }
                    )}
                  content={"Marketing"}
                  checked={categoriesFilter.Marketing}
                />
                <CheckBox
                  onChange={(e) =>
                    setCategoriesFilter(
                      { ...categoriesFilter, HumanResource: e.target.checked }
                    )}
                  content={"Human Resource"}
                  checked={categoriesFilter.HumanResource}
                />
                <CheckBox
                  onChange={(e) =>
                    setCategoriesFilter(
                      { ...categoriesFilter, LeadershipAndManagement: e.target.checked }
                    )}
                  content={"Leadership and Management"}
                  checked={categoriesFilter.LeadershipAndManagement}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, Language: e.target.checked }
                    )}
                  content={"Language"}
                  checked={categoriesFilter.Language}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, TestPreparation: e.target.checked }
                    )}
                  content={"Test Preparation"}
                  checked={categoriesFilter.TestPreparation}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, Pastry: e.target.checked }
                    )
                  }
                  content={"Pastry"}
                  checked={categoriesFilter.Pastry}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, CruisesManagement: e.target.checked }
                    )
                  }
                  content={"Cruises Management"}
                  checked={categoriesFilter.CruisesManagement}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, Oenology: e.target.checked }
                    )
                  }
                  content={"Oenology"}
                  checked={categoriesFilter.Oenology}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, HospitalityManagement: e.target.checked }
                    )}
                  content={"Hospitality Management"}
                  checked={categoriesFilter.HospitalityManagement}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, SalesAndMarketing: e.target.checked }
                    )}
                  content={"Sales and Marketing"}
                  checked={categoriesFilter.SalesAndMarketing}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, EventManagement: e.target.checked }
                    )}
                  content={"Event Management"}
                  checked={categoriesFilter.EventManagement}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, RevenueManagement: e.target.checked }
                    )}
                  content={"Revenue Management"}
                  checked={categoriesFilter.RevenueManagement}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, Reception: e.target.checked }
                    )}
                  content={"Reception"}
                  checked={categoriesFilter.Reception}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, FoodAndBeverages: e.target.checked }
                    )}
                  content={"Food and Beverages"}
                  checked={categoriesFilter.FoodAndBeverages}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, Spa: e.target.checked }
                    )}
                  content={"Spa"}
                  checked={categoriesFilter.Spa}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, Tourism: e.target.checked }
                    )}
                  content={"Tourism"}
                  checked={categoriesFilter.Tourism}
                />
                <CheckBox
                  onChange={
                    (e) => setCategoriesFilter(
                      { ...categoriesFilter, BusinessSkills: e.target.checked }
                    )}
                  content={"Business Skills"}
                  checked={categoriesFilter.BusinessSkills}
                />
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  </>
  )
}

export default LeftSidebar