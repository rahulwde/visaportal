import React from 'react';
import BannerSlider from '../components/BannerSlider';
import CountrySection from '../components/CountrySection';
import ConsultantsSection from '../components/ConsultantsSection';
import CounterSection from '../components/CounterSection';
 
const Home = () => {
  return (
    <div>
       <BannerSlider />
      <CountrySection></CountrySection>
      <ConsultantsSection></ConsultantsSection>
      <CounterSection></CounterSection>
    </div>
  );
};

export default Home;