const Rrss = () => {
    const userRss= [
        { name: 'facebook', url: 'https://www.facebook.com/donMarioxD'},
        { name: 'instagram', url: 'https://www.instagram.com/rojasmario/'},
        { name: 'github', url: 'https://github.com/MarioDevelop3r'},
        { name: 'linkedin', url: 'https://www.linkedin.com/in/mario-rojas-0990a9182/'},
        { name: 'youtube', url: ''}
    ];

    const icons = [
        { name: 'facebook', src: "/src/assets/img/logotipo-circular-de-facebook.png" },
        { name: 'instagram', src: "/src/assets/img/instagram_internet_media_network_social_icon_123258.png"  },
        { name: 'github', src: "/src/assets/img/github-logo_icon-icons.com_73546.png"  },
        { name: 'linkedin', src: "/src/assets/img/linkedin_black_logo_icon_147114.png"  },
        { name: 'youtube', src: "/src/assets/img/social_youtube_23.png"}
    ];

    return (
        <div className="redes">
            {icons.map((icon, index) => {
                // Encuentra la URL correspondiente en userRss
                const rssUrl = userRss.find(rss => rss.name === icon.name)?.url;
                return (
                    <a href={rssUrl} key={index}>
                        <img src={icon.src} alt={icon.name} />
                    </a>
                );
            })}
        </div>
    );
}

export default Rrss;



