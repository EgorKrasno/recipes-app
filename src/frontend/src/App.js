import "./App.css";
import {AnimatePresence, motion} from "framer-motion"
import {AiFillFire, AiOutlineClockCircle, BsFillBarChartFill, GiFoodChain} from "react-icons/all";
import {useState} from "react";


const data = [
    {
        id: 1,
        title: 'Friend Chicken',
        description: 'Chicken fried with cheese and vegetables',
        ingredients: ['Chicken', 'Cheese', 'Vegetables'],
        instructions: 'Cook the chicken for 20 minutes',
        time: '30 min',
        img: 'https://media.istockphoto.com/photos/plate-of-fried-chicken-on-blue-plaid-towel-picture-id452813985?k=20&m=452813985&s=612x612&w=0&h=8EL4NfG-jGwkAZtfEAY0180mmU6jQoj6I1rZtdo4gy8=',
        difficulty: 'Easy',
        calories: '450'
    },
    {
        id: 2,
        title: 'Greek Salad',
        description: 'Salad with tomatoes, cucumbers, olives, and feta cheese',
        ingredients: ['Tomatoes', 'Cucumbers', 'Olives', 'Feta Cheese'],
        instructions: 'Cut the tomatoes, cucumbers, olives, and feta cheese into small pieces',
        time: '20 min',
        img: 'https://www.cookingclassy.com/wp-content/uploads/2018/02/greek-salad-4.jpg',
        difficulty: 'Easy',
        calories: '260'
    },
    {
        id: 3,
        title: 'Spaghetti',
        description: 'Spaghetti with meatballs',
        ingredients: ['Spaghetti', 'Meatballs'],
        instructions: 'Cook the spaghetti for 20 minutes',
        time: '40 min',
        img: 'https://www.thewholesomedish.com/wp-content/uploads/2020/08/The-Best-Classic-Spaghetti-1200.jpg',
        difficulty: 'Hard',
        calories: '800'
    },
    {
        id: 4,
        title: 'Pizza',
        description: 'Pizza with cheese and pepperoni',
        ingredients: ['Pizza', 'Cheese', 'Pepperoni'],
        instructions: 'Cook the pizza for 20 minutes',
        time: '30 min',
        img: 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
        difficulty: 'Easy',
        calories: '1250'
    },
    {
        id: 5,
        title: 'Pancakes',
        description: 'Pancakes with syrup and butter',
        ingredients: ['Pancakes', 'Syrup', 'Butter'],
        instructions: 'Cook the pancakes for 20 minutes',
        time: '30 min',
        img: 'https://www.recipetineats.com/wp-content/uploads/2017/06/Pancakes-SQ.jpg?w=500&h=500&crop=1',
        difficulty: 'Medium',
        calories: '650'
    },
    {
        id: 6,
        title: 'Cake',
        description: 'Cake with cream cheese and chocolate',
        ingredients: ['Cake', 'Cream Cheese', 'Chocolate'],
        instructions: 'Cook the cake for 20 minutes',
        time: '30 min',
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk',
        difficulty: 'Hard',
        calories: '9450'
    },
    {
        id: 7,
        title: 'Salad',
        description: 'Salad with tomatoes, cucumbers, olives, and feta cheese',
        ingredients: ['Tomatoes', 'Cucumbers', 'Olives', 'Feta Cheese'],
        instructions: 'Cut the tomatoes, cucumbers, olives, and feta cheese into small pieces',
        time: '20 min',
        img: 'https://www.cookingclassy.com/wp-content/uploads/2018/02/greek-salad-4.jpg',
        difficulty: 'Easy',
        calories: '200'
    },
    {
        id: 8,
        title: 'Soup',
        description: 'Soup with chicken, vegetables, and cheese',
        ingredients: ['Chicken', 'Vegetables', 'Cheese'],
        instructions: 'Cook the soup for 20 minutes',
        time: '30 min',
        img: 'https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Chicken-Noodle-Soup-Recipe-1200.jpg',
        difficulty: 'Easy',
        calories: '365'
    },
    {
        id: 9,
        title: 'Sushi',
        description: 'Sushi with salmon, avocado, and cucumber',
        ingredients: ['Salmon', 'Avocado', 'Cucumber'],
        instructions: 'Cook the sushi for 20 minutes',
        time: '30 min',
        img: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/04/peanut-tofu-sushi-macro-800x1200.jpg',
        difficulty: 'Easy',
        calories: '500'
    }
]

const App = () => {
    const [recipes, setRecipes] = useState(data);
    const [search, setSearch] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);


    return (
        <div className="container mx-auto flex flex-col overflow-hidden h-screen">
            <header className="flex justify-center items-center mt-4">
                <GiFoodChain className="h-12 w-12 text-blue-500 "/>
                <h1 className="text-3xl text-blue-500 px-3 font-bold">Recipinator</h1>
            </header>
            <div className="flex justify-center mt-6">
                <input
                    className="px-3 py-2 text-gray-600 bg-gray-100 ring-1 ring-gray-200 ring-opacity-50 rounded-lg w-96 shadow-lg"
                    type="text"
                    placeholder="Search for a recipe"
                    onChange={(e) => setFilteredRecipes(recipes.filter(r => r.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())))}/>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 px-8">
                {(recipes.length > 0) && filteredRecipes.map(recipe =>
                    <AnimatePresence>
                        <motion.div
                            key={recipe.id}
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            exit={{scale: 0, opacity: 0}}
                            whileHover={{
                                scale: 1.10
                            }}
                            // transition={{
                            //     type: 'spring',
                            //     stiffness: 200,
                            //     damping: 18
                            // }}

                            className="flex justify-between w-full h-52 shadow-lg rounded-2xl bg-white cursor-pointer">
                            <div className="flex justify-between flex-col pt-3 pl-5 w-1/2">
                                <div>
                                    <h1 className="text-lg font-bold">{recipe.title}</h1>
                                    <p className="text-sm text-gray-600 pt-1">{recipe.description}</p>
                                    <p className="text-xs text-gray-500 pt-3">Ingredients: {recipe.ingredients.join(', ')}</p>
                                </div>
                                <div className="flex mb-3 space-x-5">
                                    <div className="flex items-center">
                                        <AiOutlineClockCircle className="text-yellow-400"/>
                                        <p className="text-xs pl-1 text-gray-500">{recipe.time}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <BsFillBarChartFill className="text-blue-400"/>
                                        <p className="text-xs pl-1 text-gray-500">{recipe.difficulty}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <AiFillFire className="text-red-400"/>
                                        <p className="text-xs pl-1 text-gray-500">{recipe.calories}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl w-2/5">
                                <img className="h-full w-full object-cover rounded-r-2xl" src={recipe.img} alt=""/>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    )
        ;
}

export default App;
