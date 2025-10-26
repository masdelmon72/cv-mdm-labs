# Getting Started with new project.

# new project:

npm i -g create-react-app
npx create-react-app frontend_mui_reactjs --template typescript

# vscode extension

code --install-extension dsznajder.es7-react-js-snippets
code --install-extension vscode-icons-team.vscode-icons
code --install-extension naumovs.color-highlight
code --install-extension esbenp.prettier-vscode
code --install-extension humao.rest-client
code --install-extension riazxrazor.html-to-jsx
code --install-extension christian-kohler.path-intellisense

# install

yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid
yarn add chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom
yarn add axios formik formik-material-ui moment react-moment url-join react-number-format
yarn add @types/redux-logger react-redux redux redux-logger redux-thunk url-join @types/url-join react-iframe
yarn add leaflet react-leaflet
yarn add -D @types/leaflet

yarn add react-apexcharts apexcharts

yarn add react-helmet-async

yarn add framer-motion

# Page Components

// In Pages
cd src/components/pages
yarn add global create-react-component-folder
npx crcf -f --notest --typescript LoginPage RegisterPage AboutUs
npx crcf -f --notest --typescript HomePage UserDashboardPage CoordDashboardPage AdminDashboardPage SuperadminDashboardPage
npx crcf -f --notest --typescript ChangwatProfile TargetAmphoe TargetGroceries TeamRDUProvince TeamRDUAmphoe RDUProvincePlan
npx crcf -f --notest --typescript AdminRegisterPage CoordRegisterPage
npx crcf -f --notest --typescript DrugServicePage
npx crcf -f --notest --typescript ThaiRDUServicePage

npx crcf -f --notest --typescript Page404

// In Charts
cd src/components/charts
npx crcf -f --notest --typescript RDUHospitalIndyChart RDUPCUIndyChart RDUPrivateHosPassChart
npx crcf -f --notest --typescript RDUPrivateClinicPassChart
npx crcf -f --notest --typescript RDUDrugstorePassChart RDUHPVCDataChart RDUTAWAIInfoChart
npx crcf -f --notest --typescript RDUProvincePassChart RDUAmphoePassChart RDUGroceriesPassChart
npx crcf -f --notest --typescript DispensingAndDrugValuePCUChart Top100DrugDispensingChart
npx crcf -f --notest --typescript DispensingAndDrugValueOPDHospitalChart AdmitAndDrugValueIPDHospitalChart
npx crcf -f --notest --typescript HPVCDrugPer10000AdmissionsByKhetChart
npx crcf -f --notest --typescript HPVCSeriousAEAvgByKhetChart

# In Layouts

cd src/components/layouts
npx crcf -f --notest --typescript Header Menu

# Homepage Components

cd src/compopents/homepage
npx crcf -f --notest --typescript SummaryCard RDUProvinceChart RDUProvinceMap RDUProvinceList
npx crcf -f --notest --typescript RDUCountryInfo
npx crcf -f --notest --typescript PrivateHospitalChart DrugStoreGPPChart
npx crcf -f --notest --typescript HPVCInfoChart TAWAIChart
npx crcf -f --notest --typescript RDUHospitalChart RDUPCUChart
npx crcf -f --notest --typescript PrivateClinicChart

# CoordDashboardPage

cd src/components/coorddashboard
npx crcf -f --notest --typescript CoordSummaryCard

# Drug Service Components

cd src/components/drugservice
npx crcf -f --notest --typescript DispensingAndDrugValueOPDHospital AdmitAndDrugValueIPDHospital
npx crcf -f --notest --typescript DispensingAndDrugValuePCU
npx crcf -f --notest --typescript Top100DrugDispensing
npx crcf -f --notest --typescript DrugPer1000Admissions
npx crcf -f --notest --typescript HPVCSeriousAE

# ThaiRDU Components

cd src/components/thairdu
npx crcf -f --notest --typescript ThaiRDUDownload ThaiRDUFeature ThaiRDUQA

# AboutUs

cd src/components/aboutus
npx crcf -f --notest --typescript AboutUsSection

# Start project

yarn start
