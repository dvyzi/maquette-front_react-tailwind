import { Linkedin, Mail } from 'lucide-react';
import { Button } from './basic'


export function Header({ title }) {
    document.title = title;
    return (
        <>
            <header className='py-6 px-28'>
                <ul className="flex justify-between items-center">
                    <li>Profil</li>
                    <li>Boutiques</li>
                    <a href='/nos-gateaux'><li>Gâteaux</li></a>
                    <a href="/"><img src="logo.png" alt="logo" /></a>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <Button text='Contact' />
                </ul>
            </header>
        </>
    )
}

export function Footer() {
    return (
        <>
            <footer className='flex justify-around px-28 py-7'>
                <div className='w-2/4 flex flex-col gap-7'>
                    <img className='w-[161px] h-[39px]' src="logo.png" alt="" />
                    <p className='miniDescription'>Odio sed est auctor orci odio est. Aliquet suscipit hendrerit mattis euismod sed. Ornare placerat aliquet phasellus non in et et nam. Odio sed est auctor orci odio est. Aliquet suscipit hendrerit</p>
                </div>
                <div className='ourOfficeContain_footer'>
                    <h4>Our office</h4>
                    <p className='miniDescription'>hendrerit mattis euismod</p>
                </div>
                <div className='ourOfficeContain_footer'>
                    <h4>Our office</h4>
                    <div className='flex flex-row gap-3'>
                        <a href='#'><Linkedin /></a>
                        <a href='#'><Mail /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
