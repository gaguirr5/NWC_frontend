import React, { useEffect } from 'react'
import { useState } from 'react'
import toform from "./res/toform.png";
import "./Layout3.css";
import { useLocation } from 'react-router';
import VARIABLES from '../../config/.env';
import ReactMarkdown from 'react-markdown';

function Layout3() {
    const { search } = useLocation();
    const id = search.split('=')[1];

    const [pageState, setPageState] = useState({
        header: "SENECAL FALLS SOUTH",
        quote: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section1_p1: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section1_p2: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section2: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section3Text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section3Quote: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        section4: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum odio diam, quis rutrum enim laoreet sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque blandit, est sed porta finibus, velit turpis sodales nisi, eu dapibus risus augue vel dolor. Nam a orci sollicitudin, interdum ligula eu, viverra sem. Etiam vitae mollis nunc, quis pellentesque sem. Vivamus vestibulum sodales dui eget tempor. Fusce eget ultrices justo, at bibendum velit. Duis commodo non ex vel euismod.",
        authorCred: "Written by Jane Doe",
        sources: ["Source A", "Source B",],
        PreferredCitation: ""
    });

    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, `content-essays/${id}`].join('/'))
        .then(res => res.json())
        .then(data => {
            setPageState({
                ...pageState,
                header: data.Title,
                quote: data.PullQuote1,
                section1_p1: data.Paragraph1.slice(0, parseInt(data.Paragraph1.length / 2)) + "-",
                section1_p2: data.Paragraph1.slice(parseInt(data.Paragraph1.length / 2)),
                section2: data.Paragraph2,
                section3Text: data.Paragraph3,
                section3Quote: data.PullQuote2,
                section4: data.Paragraph4,
                authorCred: data.AuthorCredit,
                sources: data.Sources.map(src => src.text),
                PreferredCitation: data.PreferredCitation
            })
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="layout3">
            <h1>{pageState.header}</h1>
            <img src={toform} alt=""/>
            <p className="layout3_quote">{pageState.quote}</p>
            <p className="layout3_section1">
                <ReactMarkdown>
                {pageState.section1_p1}
                </ReactMarkdown>
                <ReactMarkdown>
                {pageState.section1_p2}
                </ReactMarkdown>
            </p>
            <ReactMarkdown className="layout3_section2">
                {pageState.section2}
            </ReactMarkdown>
            <p className="layout3_section3">
                <ReactMarkdown className="layout3_section3Text">
                    {pageState.section3Text}
                </ReactMarkdown>
                <p className="layout3_section3Quote">{pageState.section3Quote}</p>
            </p>
            <ReactMarkdown className="layout3_section2">
                {pageState.section4}
            </ReactMarkdown>
            <ReactMarkdown className="layout3_author">
                {pageState.authorCred}
            </ReactMarkdown>
            <div className="layout3_sources">
                <h2>SOURCES</h2>
                {pageState.sources.map(src => <p>{src}</p>)}
            </div>

            {/**PREF CIT */}
            <div className="layout3_prefCit">
                <h2>PREFERRED CITATION</h2>
                {pageState.PreferredCitation}
            </div>

        </div>
    )
}

export default Layout3