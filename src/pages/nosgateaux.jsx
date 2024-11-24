import { Header } from '../components/layout'
import { Footer } from '../components/layout'
import { Button } from '../components/basic'
import { CakeCard } from '../components/card'


function Nosgateaux(){
    return (
        <>
        <Header title='Nos gateaux'/>
        <main>
            <section>
                <h1>Nos gâteaux</h1>
                <div className='flex flex-wrap gap-5'>
                <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
                <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
                <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
                <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
                <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />
                <CakeCard img="pistachecake.png" title="Gateaux pistache" description="Lorem ipsum dolor sit amet consectetur. Urna lobortis neque consecte" />

                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Nosgateaux