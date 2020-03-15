import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const Home = () => {
    return (
        <div>
            <section className="hero container">
            <div className="hero-content">
                <h1>      <span>Hi,</span>
                    <br /><span>I'm Aston</span>
                    <br /><span>Web Developer &</span>
                    <br /><span>Aspiring Software Engineer</span>
                </h1>
            </div>
            <div className="hero-buttons">
                <Button style={{ marginRight: "30px"}} href="/about" variant="outlined" color="primary">About</Button>
                <Button href="/work" variant="outlined" color="primary">Work</Button>
            </div>
        </section>
        <main>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales turpis id sapien feugiat feugiat. Ut et tortor aliquam, consequat tortor sed, tempor metus. Suspendisse potenti. Ut iaculis lectus odio, vel mattis ex facilisis a. Nunc tortor mauris, gravida at facilisis sit amet, dictum id ipsum. Aliquam turpis leo, congue vitae dapibus at, iaculis eu nibh. Sed et sapien sed libero varius luctus. Vestibulum scelerisque sit amet augue ac lacinia. Maecenas in sem suscipit, luctus nisi nec, rhoncus metus.

Aliquam sed ante ut arcu vulputate semper eu et mi. Phasellus ornare, enim eget tempus dictum, elit urna finibus nulla, eu placerat nisl dui non arcu. Donec convallis vitae odio id fringilla. Ut at libero sit amet lectus viverra ultrices. Duis ultrices eleifend scelerisque. Vestibulum gravida libero magna, eu aliquam nibh sagittis ac. Cras suscipit ut mi nec mattis. Mauris luctus congue arcu, id laoreet purus tincidunt id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget viverra purus, quis facilisis orci. Proin id odio vitae tortor ultricies pretium. Duis lacinia lacus eu rutrum egestas. Mauris ullamcorper in ante at laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sed sem pretium, sagittis leo faucibus, congue lectus. Curabitur ultrices erat at finibus fermentum.

Quisque eleifend risus at tortor lobortis, vel venenatis nunc suscipit. Nulla sit amet tellus eget arcu commodo vulputate eget quis massa. Phasellus id consectetur arcu. Aenean condimentum condimentum semper. Mauris non pellentesque sapien. Nunc aliquam consectetur erat, et egestas ante euismod nec. Sed non est vel elit ultrices faucibus at a augue. Vestibulum eu gravida massa. Etiam consectetur, nibh at pretium dictum, quam est venenatis massa, ut commodo odio tortor eget massa. Nunc feugiat arcu non molestie rhoncus. Phasellus in libero ligula.

Donec varius eros mauris, et mattis tortor gravida in. Maecenas condimentum scelerisque est vel scelerisque. Phasellus sagittis augue vehicula libero tincidunt, at dictum sapien placerat. Aenean sed ex non lacus fringilla bibendum. Suspendisse condimentum posuere lorem, in finibus nulla lobortis eu. Etiam dapibus, elit sit amet semper euismod, sapien ipsum rutrum ligula, vitae feugiat sem tortor id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eget enim dictum, efficitur ipsum et, tincidunt quam. Nullam non volutpat felis, in tincidunt lectus. In vehicula congue felis at egestas. Nunc id mauris laoreet eros convallis auctor id id metus. Duis felis libero, porttitor at dapibus in, sollicitudin vitae nulla. Duis non enim sapien.

Aliquam iaculis scelerisque ante, et porttitor nibh iaculis at. Phasellus eu lorem gravida, mattis metus consectetur, lacinia risus. Quisque vel dictum odio. Curabitur cursus lacus lacinia mattis sollicitudin. Nam et consectetur lorem. Sed lacus mi, egestas non tincidunt ultrices, efficitur vitae risus. Sed magna mauris, molestie nec nisi quis, elementum eleifend magna. Nullam ultrices, enim vitae egestas dictum, ex dui malesuada purus, sit amet posuere turpis orci et lacus. Mauris vel neque semper, laoreet dolor et, tincidunt massa. Donec at iaculis mauris.
            </p>
        </main>
        </div>
    )
}

export default Home;
