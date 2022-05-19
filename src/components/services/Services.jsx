import {
    ServicesContainer, 
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesIcon,
    ServicesWrapper,

} from './ServicesElement'
import Icon1 from '../../images/svg-4.svg'

function Services() {
  return (
    <>
    <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your average revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your average revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your average revenue</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services