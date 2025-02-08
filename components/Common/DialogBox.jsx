import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { QuestionMarkIcon } from '@/components/Icons/Icons'

function DialogBox() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button type='button' aria-label="Ask a question" className='text-[0.65rem] text-left hover:text-primary flex font-semibold'><QuestionMarkIcon className={'w-4 me-1'} /> Ask a question</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-none focus-visible:outline-none">
                <DialogHeader>
                    <DialogTitle>Eine Frage stellen</DialogTitle>
                    <DialogDescription>
                        Senden Sie uns Ihre Frage. Unser Vertreter wird Ihre Frage per E -Mail beantworten.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <form action="">
                        {/* Name */}
                        <label className="form-control w-full col-span-1">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Geben Sie hier Ihren Namen ein" className="input h-9 input-bordered w-full text-sm rounded-none max-w-xs hover:border-primary/25 hover:outline-primary/25" />
                        </label>

                        {/* Email */}
                        <label className="form-control w-full col-span-1">
                            <div className="label">
                                <span className="label-text">E-Mail</span>
                            </div>
                            <input type="email" placeholder="Geben Sie hier Ihre E -Mail ein" className="input h-9 input-bordered w-full text-sm rounded-none max-w-xs hover:border-primary/25 hover:outline-primary/25" />
                        </label>

                        {/* Address */}
                        <label className="form-control w-full col-span-1">
                            <div className="label">
                                <span className="label-text">Frage</span>
                            </div>
                            <textarea className="textarea textarea-bordered w-full rounded-none hover:border-primary/25 hover:outline-primary/25" placeholder="Geben Sie hier Ihr Problem ein"></textarea>
                        </label>
                    </form>
                </div>
                <DialogFooter>
                    <button type="submit" className="btn btn-primary rounded-none text-sm text-white py-0 font-semibold h-10 min-h-10">Problem senden</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default DialogBox