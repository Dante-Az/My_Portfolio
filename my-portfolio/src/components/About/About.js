import { BsPersonCircle } from "react-icons/bs";
import Portrait from '../Portrait/Portrait'
import Button from '../Button/Button'
export default function About() {
    return (
        <section id="about" className="section hidden">
            <div className="section__title hidden">
                <h1 className="hidden">À Propos De Moi</h1>
                <BsPersonCircle/>
            </div>
                <div className='about hidden'>
                    <Portrait className="hidden"/>
                    <div className='about__content hidden'>
                        <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra dui malesuada nulla sollicitudin ullamcorper eu pretium risus.
                            Vivamus faucibus iaculis libero vitae tempus. Phasellus semper mi pretium, consectetur nibh id, porttitor lacus. Nulla nec purus vel diam tincidunt ultrices. 
                            Praesent sollicitudin hendrerit diam. Nunc aliquam, arcu vel lobortis varius, ipsum erat tincidunt felis, hendrerit vestibulum justo diam sit amet ligula. 
                            Aenean id tincidunt lacus. Curabitur turpis tellus, tempor sed scelerisque vel, lobortis sit amet nunc. 
                            Maecenas tellus ipsum, imperdiet at erat eu, imperdiet volutpat elit. Suspendisse viverra leo vel erat sodales, nec pharetra est egestas. 
                            Nam lorem tellus, tincidunt in aliquet nec, efficitur ac risus. Morbi non augue lacus. Fusce vestibulum nisl suscipit justo dapibus laoreet. 
                            Etiam euismod pellentesque dui, et accumsan libero pellentesque id.
                        </p>
                        <div className='about__button hidden'>
                            <Button
                            content = "Me Contacter"
                            />
                            <Button
                            content = "Mon CV"
                            />
                        </div>
                    </div>
                </div>
            </section>
    )
}