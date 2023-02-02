import Slider from "./Slider";
import { coffeemakersArray } from "./CoffeemakersImages";
import { toastersArray } from "./ToastersImages";
import { ironsArray } from "./IronsImages";
import { wafflemakersArray } from "./WafflemakersImages";


export const data =[
    {
        id: 1,
        name: "Coffee maker",
        slider: <Slider imagesArray={coffeemakersArray} />,
        description: "A coffee maker is a plug in appliance that pushes hot water through coffee beans to create coffee. A coffee maker is composed of a heating plate on the bottom, a glass pitcher to catch the coffee in, a water reserve tank, a cup of to hold coffee grounds, and a tube to tie this all together.",
        fullDescription: false
    },

    {
        id: 2,
        name: "Waffle maker",
        slider: <Slider imagesArray={wafflemakersArray} />,
        description: "A waffle iron or waffle maker is a utensil or appliance used to cook waffles. It comprises two metal plates with a connecting hinge, molded to create the honeycomb pattern found on waffles. The iron is heated and either batter is poured or dough is placed between the plates, which are then closed together to bake breakfast delicacies with a sweet dessert flavor, very similar to pancakes but lighter and sweeter. The appearance is much harder to achieve than a pancake; hence the waffle iron.",
        fullDescription: false
    },

   {
        id: 3,
        name: "Toaster",
        slider: <Slider imagesArray={toastersArray} />,
        description: "A toaster is a small electric appliance that uses radiant heat to brown sliced bread into toast. In pop-up or automatic toasters, a single vertical piece of bread is dropped into a slot on the top of the toaster. A lever on the side of the toaster is pressed down, lowering the bread into the toaster and activating the heating elements.",
        fullDescription: false
    },

    {
        id: 4,
        name: "Iron",
        slider: <Slider imagesArray={ironsArray} />,
        description: "A clothes iron (also flatiron, smoothing iron, or simply iron) is a small appliance that, when heated, is used to press clothes to remove wrinkles and unwanted creases.",
        fullDescription: false
    }, 
]