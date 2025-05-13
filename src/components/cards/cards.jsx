import React from 'react'
import { ContainerCards, InfoCard, ContainerInfo, ContainerButton, SwitchLabel, Slider } from './cards-styled'
import data from "../../data.json"


const Cards = ({filterActive}) => {



    const productsFiltered =data.filter(item=>{
        if (filterActive=== 'all'){
            return true;
        }
        if (filterActive===true){
            return item.isActive===true
        }
        return item.isActive===false
    })

  return (
   <>
   <ContainerCards>
    {productsFiltered.map((item, index)=>(
        <InfoCard key={index}>
            <ContainerInfo>
            <div className='imagen'>
                <img src={item.logo} alt="" />
            </div>
            <div className="title-description">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
            </ContainerInfo>
            <ContainerButton>        
                <button>Remove</button>
             <SwitchLabel>
              <input type="checkbox" checked={item.isActive}
              onChange={()=> handleToggle(item.id)}/>
              <Slider />
             </SwitchLabel>                       
            </ContainerButton>

        </InfoCard>
    ))}

   </ContainerCards>
   </>
  )
}

export default Cards