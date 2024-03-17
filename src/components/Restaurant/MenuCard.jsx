import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControl, FormControlLabel } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const demo = [
    {
        category:"Nuts & Seed",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Ground Beef", "Bacon strips"]
    },
]
const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log("value")
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls='panel1-content'
          id='panel1-header'
        >
        <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
                <img 
                    className="w-[7rem] h-[7rem] object-cover"
                    src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg" 
                    alt="food-img" 
                />
                <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <div className="font-semibold text-xl">
                        Burger
                    </div>
                    <p>₹499</p>
                    <p className='text-gray-400'>Nice food</p>
                </div>
            </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex flex-wrap gap-5">
                {
                    demo.map((item)=>(
                      <div className="">
                        <p className="">{item.category}</p>
                        <FormControl>
                            {item.ingredients.map((item)=><FormControlLabel control={<Checkbox  onChange={()=>handleCheckBoxChange(item)}/>} label={item}/>)}
                        </FormControl>
                      </div>
                    ))}
            </div>
            <div className='pt-5'>
              <Button variant='contained' disabled={false} type='submit'>
                {true?"Add to Card":"out of stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard
