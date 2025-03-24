export let Keywords = () => {
    const keywords = [
        "Blue Diamond Almonds",
        "Angie’s Boomchickapop Corn",
        "Salty Kettle Corn",
        "Warrior Blend Organic",
        "Sweet Vanilla Yogurt",
        "Chao Cheese Creamy",
        "Foster Farms Takeout Crispy Wings",
        "Chobani Greek Yogurt",
        "Warrior Blend Organic",
        "Chao Cheese Creamy",
        "Warrior Blend Organic",
        "Angie’s Boomchickapop Corn",
        "Foster Farms Takeout Crispy Wings",
        "Salty Kettle Corn",
        "Salty Kettle Corn",
        "Angie’s Boomchickapop Corn",
        "Chicken Meatballs",
        "Warrior Blend Organic",
    ];

    return (
        <section className="py-5">
            <div className="container-fluid">
                <h2 className="my-5">People are also looking for</h2>
                {keywords.map((keyword, index) => (
                    <a href="#" key={index} className="btn btn-warning me-2 mb-2">
                        {keyword}
                    </a>
                ))}
            </div>
        </section>
    );
};
