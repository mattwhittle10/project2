INSERT INTO customers (first_name, last_name, email_address, phone_number, host_rating, first_time_login, google_id)
VALUES  ("Michael","Skarn", "mikeSizzle@gmail.com", "19718065927", 5, TRUE, NULL ),
        ("Some","Body", "somebody@gmail.com", "19718065927", 5, TRUE, NULL),
        ("Marvin","Milano", "somebody@gmail.com", "19718065927", 5, TRUE, NULL);

INSERT INTO products (title, img_url, address, city, state, zip, available, price, category, secure, description)
VALUES  ("RV Pad!", "http://www.coronadoconcrete.com/wp-content/uploads/2016/03/RV-Pad-3.jpg", "50 S Redwood Rd", "Salt Lake City", "UT", 84101, true, 50, "Outdoor", false, "Awesome RV pad with electrical hookup to keep the battery's charged. It's in a safe neighborhood. Text or email if interested."),
        ("Basement", "https://www.publicstorage.com/blog/wp-content/uploads/2018/10/basement-organization-BLOG.jpg", "471 W 500 S", "Salt Lake City", "UT", 84101, true, 20, "Indoor", true, "We have a ton of available space in our basement since we don't ever use it. We always keep our house locked up day and night, and don't have any kids that will be accidently getting into your stuff. Text if intersted."),
        ("Shed", "https://store.alansfactoryoutlet.com/v/vspfiles/photos/8x16-mini-barn-wood-shed-kit-2.jpg", "523 200 N", "Salt Lake City", "UT", 84101, true, 30, "Indoor", true, "Shed is brand new and is completely water tight. We always keep it locked. You will receive a key so that you can easily get your stuff out without having to schedule a time to come get it. Call if interested"),
        ("Garage at Cabin", "http://secureservercdn.net/45.40.149.159/64i.bdf.myftpupload.com/wp-content/uploads/2016/02/Vertical-Steel-Sided-Garage-with-Log-and-Stone-facade.jpg?time=1566133959", "29 W 800 S", "Salt Lake City", "UT", 84101, false, 60, "Indoor", true, "Awesome 2 car garage up in the mountains. You can store your ATV's, Motorcycles, or anything you need to. Upon booking you will have remote access to get into just the garage whenever you need to. Call or email to discuss booking.");

-- ***Matt, can we change "products" to "listings"? Let me know what you think! Calli***