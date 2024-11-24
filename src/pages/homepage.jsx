import { Header } from '../components/layout'
import {Footer} from '../components/layout'
import { Button } from '../components/basic'

function Homepage() {
  return (
    <>
      <Header title='Accueil' />
      <main className='flex flex-col gap-16 bg-[#F3F3F3]'>
        <section className='flex justify-between items-center pt-16'>
          <div className='w-2/4 flex flex-col gap-9'>
            <h1>Découvrez les patisseries de Saharu AOKI</h1>
            <p className='description-p'>
              Lorem ipsum dolor sit amet consectetur. Quis nunc sed consequat et
              massa lorem. Diam vulputate ullamcorper sem arcu suscipit semper
              id. Risus sapien sollicitudin tellus.
            </p>

            <div className='flex flex-row gap-7'>
              <Button text='Nos patisseries' />
              <Button text='En savoir plus' type='black' />
            </div>
          </div>

          <img src='saharuface.png' alt='Face' />
        </section>

        <section className='flex justify-between items-center'>
          <img src='cakes.png' alt='Cakes' />

          <div className='w-2/4 flex flex-col gap-9'>
            <h2>Nos gâteaux</h2>
            <p className='description-p'>
              Lorem ipsum dolor sit amet consectetur. Quis nunc sed consequat et
              massa lorem. Diam vulputate ullamcorper sem arcu suscipit semper
              id. Risus sapien sollicitudin tellus.
            </p>
            <div>
              <Button text="M'en procurer un" />
            </div>
          </div>
        </section>

        <section className='macaron_bcgImage flex flex-col gap-9 items-center justify-center'>
          <h2 className='text-white'>Les produits signature</h2>
          <p className='description-p text-white w-[700px] text-center'>
            Le produit signature de Sadaharu Aoki. Il évolue de temps en temps,
            et a toujours un goût qui nous convainc qu'Aoki est le meilleur du
            monde.
          </p>
          <Button type='transparent' text='Découvrir' />
        </section>

        <section className='flex justify-between items-center pb-16'>
          <div className='w-2/4 flex flex-col gap-9'>
            <h2>Nos viennoiseries</h2>
            <p className='description-p w-[95%]'>Lorem ipsum dolor sit amet consectetur. Quis nunc sed consequat et
              massa lorem. Diam vulputate ullamcorper sem arcu suscipit semper
              id. Risus sapien sollicitudin tellus.</p>
            <div><Button text="M'en procurer une" /></div>
          </div>
          <img src='viennoiseries.png' alt='Viennoiseries' />
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Homepage
