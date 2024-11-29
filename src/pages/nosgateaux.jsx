import { Header } from '../components/layout'
import { Footer } from '../components/layout'
// import { Button } from '../components/basic'
import { CakeCard } from '../components/card'
import { useState, useEffect } from 'react';
// import { response } from 'express';


function Nosgateaux() {
    const [patisseries, setPatisseries] = useState([]);

    useEffect(() => {
        fetch('/db.json')
            .then((response) => response.json())
            .then((data) => {
                setPatisseries(data.patisseries);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            })
    }, []);

    return (
        <>
            <Header title='Nos gateaux' />
            <main>
                <section>
                    <h1>Nos Gateaux/Patisseries</h1>
                    <div className='flex flex-wrap gap-5'>
                        {patisseries.map((patisserie) => (
                            <CakeCard img='pistachecake.png' title={patisserie.nom} price={patisserie.prix} description={patisserie.description} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}



// function Nosgateaux() {
//     return (
//         <>
//             <Header title='Nos gateaux' />
//             <main>
//                 <section>
//                     <h1>Nos gâteaux</h1>
//                     <div className='flex flex-wrap gap-5'>
//                         <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
//                         <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
//                         <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
//                         <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
//                         <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
//                         <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />

//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </>
//     )
// }

export default Nosgateaux