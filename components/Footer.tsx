import Link from "next/link";
import Image from "next/image";
import React from "react";

const SocialLinks = ["/facebook.png","/twitter.svg","/youtube.svg"]
const FooterLinks =[{
    title:'Learn More',
    links:[
        'About Site','Press Releases','Environment','Jobs','Privacy Policy'
        ,'Contact Us'
    ],
    },
    {
        title:'Our Community'
        ,links:[
            'Climbing xil','Hiking Site','Site there'
        ]
    },{
        title:'Contact Us',
        links:[

            'Admin Officer : 111-111-9999','Email Officer : example@gmail.com'
        ]
    }
] 
const Footer = () => {
    type FooterColumnProbs = {
        title:string;
        children:React.ReactNode;
    }
    const FooterColumn = ({title,children}:FooterColumnProbs)=>{
        return (
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
    return (
        <footer className="flexCenter mb-24">
            <div className="padding-container max-container flex w-full flex-col 
            gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <Image src="/redline.png" alt="logo" width={74} height={29} />
                    </Link>
                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        {FooterLinks.map((columns) => (
                        <FooterColumn title={columns.title}>
                            <ul className="regular-14 mt-5 flex flex-col gap-4 text-gray-400">
                                {columns.links.map((link) => (
                                    <Link href="/" key={link}>
                                        {link}
                                    </Link>
                                ))}
                            </ul>
                        </FooterColumn>
                        ))}
                        <div className="flex flex-col gap-5 ">
                            <FooterColumn title="Social">
                                {SocialLinks.map((link) => (
                                <ul className="regular-14 mt-5 flex flex-col gap-4 text-gray-400">
                                    <Link href="/" key={link}>
                                        <Image src={link} alt="logo"
                                        width={24   } height={24} />
                                    </Link>
                                </ul>
                                ))}
                            </FooterColumn>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )


}
export default Footer;