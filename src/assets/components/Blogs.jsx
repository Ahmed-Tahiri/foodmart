import BlogPost1 from './../images/post-thumb-1.jpg';
import BlogPost2 from './../images/post-thumb-2.jpg';
import BlogPost3 from './../images/post-thumb-3.jpg';
export const Blogs = () => {
    const blogPosts = [
        {
            image: BlogPost1,
            date: "22 Aug 2021",
            category: "tips & tricks",
            title: "Top 10 casual look ideas to dress up your kids",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..."
        },
        {
            image: BlogPost2,
            date: "25 Aug 2021",
            category: "trending",
            title: "Latest trends of wearing street wears supremely",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..."
        },
        {
            image: BlogPost3,
            date: "28 Aug 2021",
            category: "inspiration",
            title: "10 Different Types of comfortable clothes ideas for women",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..."
        }
    ];

    return (
        <section id="latest-blog" className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="section-header d-flex align-items-center justify-content-between my-5">
                        <h2 className="section-title">Our Recent Blog</h2>
                        <div className="btn-wrap align-right">
                            <a href="#" className="d-flex align-items-center nav-link">
                                Read All Articles
                                <svg width="24" height="24">
                                    <use xlinkHref="#arrow-right"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="col-md-4">
                            <article className="post-item card border-0 shadow-sm p-3">
                                <div className="image-holder zoom-effect">
                                    <a href="#">
                                        <img src={post.image} alt="post" className="card-img-top" />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                                        <div className="meta-date">
                                            <svg width="16" height="16">
                                                <use xlinkHref="#calendar"></use>
                                            </svg>
                                            {post.date}
                                        </div>
                                        <div className="meta-categories">
                                            <svg width="16" height="16">
                                                <use xlinkHref="#category"></use>
                                            </svg>
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="post-header">
                                        <h3 className="post-title">
                                            <a href="#" className="text-decoration-none">{post.title}</a>
                                        </h3>
                                        <p>{post.description}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

