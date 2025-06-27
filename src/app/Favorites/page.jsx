import Image from 'next/image';


import Header from '../../components/Header';
import Payment from '../../components/Payment';
import Footer from '../../components/Footer';



const FacultyGrid = () => {


    return (
        <div className="min-h-screen bg-white tracking-wide">

            <Header />

            <Payment />

            <Footer />

        </div>
    );
};

export default FacultyGrid;
