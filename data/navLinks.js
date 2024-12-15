import { BlogIcon, CycleIcon, HGHIcon, NeedleIcon, SexIcon } from '../components/Icons/Icons';
import { HomeIcon } from 'lucide-react';
export const navLinks = [
    {
        icon: HomeIcon,
        isSubCategory: false,
        title: 'Home',
        slug: '/'
    },
    {
        icon: NeedleIcon,
        isSubCategory: true,
        title: 'Steroids',
        category: [
            {
                title: 'ORALE STEROIDEN',
                links: [
                    {
                        title: 'Dianabol (Methandienone)',
                        slug: '/orale-steroiden/dianabol-methandienone'
                    },
                    {
                        title: 'Winstrol (Stanazolol)',
                        slug: '/orale-steroiden/winstrol-stanazolol'
                    },
                    {
                        title: 'Turinabol',
                        slug: '/orale-steroiden/turinabol'
                    },
                    {
                        title: 'Anavar (Oxandrolon)',
                        slug: '/orale-steroiden/anavar-oxandrolon'
                    },
                    {
                        title: 'Anapolon (Oxymetholone)',
                        slug: '/orale-steroiden/anapolon-oxymetholone'
                    },
                    {
                        title: 'Clenbuterol',
                        slug: '/orale-steroiden/clenbuterol'
                    },
                    {
                        title: 'Salbutamol',
                        slug: '/orale-steroiden/salbutamol'
                    },
                    {
                        title: 'Primobolan',
                        slug: '/orale-steroiden/primobolan'
                    },
                ]
            },
            {
                title: 'TESTOSTERON',
                links: [
                    {
                        title: 'Dianabol (Methandienone)',
                        slug: '/testosteron/dianabol-methandienone'
                    },
                ]
            },
            {
                title: 'INJIZIERVARE STEROIDE',
                links: [
                    {
                        title: 'Boldenon Undecylenate',
                        slug: '/injizierbare-steroide/boldenon-undecylenate'
                    },
                ]
            },
            {
                title: 'BESTIMMUNG',
                links: [
                    {
                        title: 'Steride fur Muskelmasse',
                        slug: '/bestimmung/steride-fur-muskelmasse'
                    },
                ]
            },
        ]
    },
    {
        icon: HGHIcon,
        isSubCategory: false,
        title: 'HGH',
        slug: '/hgh'
    },
    {
        icon: CycleIcon,
        isSubCategory: true,
        title: 'PCT',
        category: [
            {
                title: 'POST CYCLE THERAPY',
                links: [
                    {
                        title: 'Exemestan (Aromasin)',
                        slug: '/pct/exemestan-aromasin'
                    },
                    {
                        title: 'Nolvadex (Tamoxifen)',
                        slug: '/pct/nolvadex-tamoxifen'
                    },
                    {
                        title: 'Clomid (Clomiphen)',
                        slug: '/pct/clomid-clomiphen'
                    },
                    {
                        title: 'Dostinex (Cabaser)',
                        slug: '/pct/dostinex-cabaser'
                    },
                    {
                        title: 'Pregnyl 5000 i.u. HCG',
                        slug: '/pct/pregnyl-5000-iu-hcg'
                    },
                    {
                        title: 'Arimidex (Anastrazol)',
                        slug: '/pct/arimidex-anastrazol'
                    },
                    {
                        title: 'Proviron (Masterlone)',
                        slug: '/pct/proviron-masterlone'
                    },
                ]
            },
        ]
    },
    {
        icon: SexIcon,
        isSubCategory: false,
        title: 'SEX',
        slug: '/sex'
    },
    {
        icon: BlogIcon,
        isSubCategory: false,
        title: 'BLOG',
        slug: '/blog'
    },
];
