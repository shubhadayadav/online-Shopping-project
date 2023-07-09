export function handleClickScroll() {
    const Featuredprdct = document.getElementById('Featuredprdct');

    //   Will scroll smoothly to the top of the next section

    console.log(Featuredprdct)
    Featuredprdct.scrollIntoView({ behavior: 'smooth' });
}