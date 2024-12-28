import { BlogIcon, CycleIcon, HGHIcon, NeedleIcon, SexIcon } from '../components/Icons/Icons';
import { HomeIcon } from 'lucide-react';
export const navLinks = [
    {
        icon: HomeIcon,
        isSubCategory: false,
        title: 'Startseite',
        slug: '/'
    },
    {
        icon: NeedleIcon,
        isSubCategory: true,
        title: 'Steroide',
        category: [
            {
                title: 'ORALE STEROIDEN',
                slug: 'orale-steroiden',
                links: [
                    {
                        title: 'Dianabol (Methandienone)',
                        slug: '/orale-steroiden/methandienone-dianabol'
                    },
                    {
                        title: 'Winstrol (Stanazolol)',
                        slug: '/orale-steroiden/stanazolol'
                    },
                    {
                        title: 'Turinabol',
                        slug: '/orale-steroiden/turinabol'
                    },
                    {
                        title: 'Anavar (Oxandrolon)',
                        slug: '/orale-steroiden/oxandrolon'
                    },
                    {
                        title: 'Anapolon (Oxymetholone)',
                        slug: '/orale-steroiden/oxymetholon'
                    },
                    {
                        title: 'Clenbuterol',
                        slug: '/orale-steroiden/clenbuterol'
                    },
                    {
                        title: 'Primobolan',
                        slug: '/orale-steroiden/primobolan'
                    },
                ]
            },
            {
                title: 'TESTOSTERON',
                slug: 'testosteron',
                links: [
                    {
                        title: 'Testosteron 400',
                        slug: '/testosteron/testosterone-400'
                    },
                    {
                        title: 'Testosteron Cypionat',
                        slug: '/testosteron/testosterone-cypionate'
                    },
                    {
                        title: 'Testosteron Enantat',
                        slug: '/testosteron/testosteron-enantat'
                    },
                    {
                        title: 'Testosteron Mix (Sustanon)',
                        slug: '/testosteron/testosterone-mix'
                    },
                    {
                        title: 'Testosteron Propionat',
                        slug: '/testosteron/testosteron-propionat'
                    },
                ]
            },
            {
                title: 'INJIZIERBARE STEROIDE',
                slug: 'injizierbare-steroide',
                links: [
                    {
                        title: 'Boldenon Undecylenate',
                        slug: '/injizierbare-steroide/boldenone-undecylenate'
                    },
                    {
                        title: 'Drostanolone Enanthate',
                        slug: '/injizierbare-steroide/drostanolone-enanthate'
                    },
                    {
                        title: 'Nandrolon Propionat (NPP)',
                        slug: '/injizierbare-steroide/nandrolone-phenylpropionate'
                    },
                    {
                        title: 'Nandrolon Decanoate (Deca Durabolin)',
                        slug: '/injizierbare-steroide/nandrolone-decanoate'
                    },
                    {
                        title: 'Trenbolone Enanthate',
                        slug: '/injizierbare-steroide/trenbolone-enanthate'
                    },
                ]
            }
        ]
    },
    {
        icon: CycleIcon,
        isSubCategory: true,
        title: 'PCT',
        category: [
            {
                title: 'Post Cycle Theropy',
                slug: 'pct',
                links: [
                    {
                        title: 'Exemestan (Aromasin)',
                        slug: '/product/exemestan-(aromasin)'
                    },
                    {
                        title: 'Nolvadex (Tamoxifen)',
                        slug: '/product/nolvadex-(tamoxifen)'
                    },
                    {
                        title: 'Clomid (Clomiphen)',
                        slug: '/product/clomid-(clomiphen)-50-mg'
                    },
                    {
                        title: 'Dostinex (Cabaser)',
                        slug: '/product/dostinex-(cabergolin)'
                    },
                    {
                        title: 'Pregnyl 5000 i.u. HCG',
                        slug: '/product/pregnyl-5000-i.u.-hcg'
                    },
                    {
                        title: 'Arimidex (Anastrozol)',
                        slug: '/product/arimidex-(anastrozol)'
                    }
                ]
            },
        ]
    },
    {
        icon: CycleIcon,
        isSubCategory: true,
        title: 'PEPTIDE',
        category: [
            {
                title: 'Bestseller Peptide',
                slug: 'peptide',
                links: [
                    {
                        title: 'BPC-157',
                        slug: '/peptide/bpc-157'
                    },
                    {
                        title: 'Bromantan',
                        slug: '/peptide/bromantan'
                    },
                    {
                        title: 'CJC-1295 DAC',
                        slug: '/peptide/cjc-1295-dac'
                    },
                    {
                        title: 'CJC-1295 NO DAC',
                        slug: '/peptide/cjc-1295-no-dac'
                    },
                    {
                        title: 'Epithalon',
                        slug: '/peptide/epithalon'
                    },
                    {
                        title: 'GHK-Cu',
                        slug: '/peptide/ghk-cu'
                    },
                    {
                        title: 'GHRP-2',
                        slug: '/peptide/ghrp-2'
                    },
                    {
                        title: 'GHRP-6',
                        slug: '/peptide/ghrp-6'
                    },
                    {
                        title: 'HGH Fragment 176-191',
                        slug: '/peptide/hgh-fragment'
                    },
                ]
            },
            {
                title: 'PEPTIDE',
                slug:"peptide",
                links: [
                    {
                        title: 'IGF-1 LR3 (Oxymedin)',
                        slug: '/peptide/igf-1-lr3'
                    },
                    {
                        title: 'Ipamorelin',
                        slug: '/peptide/ipamorelin'
                    },
                    {
                        title: 'Kisspeptin',
                        slug: '/peptide/kisspeptin'
                    },
                    {
                        title: 'Melanotan-2 (MT-2)',
                        slug: '/peptide/melanotan-2-mt-2'
                    },
                    {
                        title: 'Oxytocin',
                        slug: '/peptide/oxytocin'
                    },
                    {
                        title: 'PT-141',
                        slug: '/peptide/pt-141'
                    },
                    {
                        title: 'Selank',
                        slug: '/peptide/selank'
                    },
                    {
                        title: 'Semax',
                        slug: '/peptide/semax'
                    },
                    {
                        title: 'TB-500',
                        slug: '/peptide/tb-500'
                    },
                ]
            },
        ]
    },
    {
        icon: CycleIcon,
        isSubCategory: true,
        title: "SARM's",
        category: [
            {
                title: "SARM's",
                slug: 'sarm-s',
                links: [
                    {
                        title: 'Cardarine (GW-501516)',
                        slug: '/sarm-s/cardarine-gw-501516'
                    },
                    {
                        title: 'Ligandrol (LGD-4033)',
                        slug: '/sarm-s/ligandrol-lgd-4033'
                    },
                    {
                        title: 'MK-677 (Ibutamoren)',
                        slug: '/sarm-s/mk-677'
                    },
                    {
                        title: 'Ostarine (MK-2866)',
                        slug: '/sarm-s/ostarin'
                    },
                    {
                        title: 'Rad-140 (Testolone)',
                        slug: '/sarm-s/rad-140'
                    },
                    {
                        title: 'S-23',
                        slug: '/sarm-s/s-23'
                    },
                    {
                        title: 'S4 (Andarine)',
                        slug: '/sarm-s/s4-andarine'
                    },
                    {
                        title: 'SR-9009 (Stenabolic)',
                        slug: '/sarm-s/sr-9009-stenabolic'
                    },
                    {
                        title: 'YK-11',
                        slug: '/sarm-s/yk-11'
                    },
                ]
            },
        ]
    },
    {
        icon: CycleIcon,
        isSubCategory: true,
        title: 'Fatburner',
        category: [
            {
                title: 'Fatburner',
                slug:"fatburner",
                links: [
                    {
                        title: "Sibutramin 100 Tabletten 20mg/tab",
                        slug: "/product/sibutramin-100-tabletten-20mg",
                    },
                    {
                        title: "Tiromel T3 100 Tabletten 25mcg/tab",
                        slug: "/product/tiromel-t3-100-tabletten-25mc",
                    },
                    {
                        title: "5-Amino-1MQ 50mg 30 Tabletten",
                        slug: "/product/5-amino-1mq-50-mg-30-tabletten",
                    },
                    {
                        title: "Yohimbine HCL Endogenic",
                        slug: "/product/endogenic-yohimbine-hcl",
                    },
                    {
                        title: "Yohimbin Endogenic in Kapseln",
                        slug: "/product/yohimbin-endogenic-in-kapseln",
                    },
                    {
                        title: "Semaglutid BioAmino Labs",
                        slug: "/product/semaglutid-(ozempic)-ohne-rezept",
                    },
                    {
                        title: "Swiss Pharma Sibutramine 25mg 30 Tab",
                        slug: "/product/swiss-pharma-sibutramine-25-mg-30-tab",
                    },
                    {
                        title: "Semaglutid 4mg BioAmino Labs",
                        slug: "/product/semaglutid-4-mg",
                    },
                    {
                        title: "Sema-G 2mg",
                        slug: "/product/sema-g-2-mg",
                    },
                ]
            },
        ]
    },
    {
        icon: SexIcon,
        isSubCategory: false,
        title: 'BEWERTUNGEN',
        slug: '/reviews'
    },
    {
        icon: BlogIcon,
        isSubCategory: false,
        title: 'BLOG',
        slug: '/blog'
    },
];
