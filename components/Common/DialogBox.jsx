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
                    <DialogTitle>Ask a Question</DialogTitle>
                    <DialogDescription>
                        Send your question to us. Our representative will answer to your question through email.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <form action="">
                        {/* Name */}
                        <label className="form-control w-full col-span-1">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Enter Your Name Here" className="input h-9 input-bordered w-full text-sm rounded-none max-w-xs hover:border-primary/25 hover:outline-primary/25" />
                        </label>

                        {/* Email */}
                        <label className="form-control w-full col-span-1">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" placeholder="Enter Your Email Here" className="input h-9 input-bordered w-full text-sm rounded-none max-w-xs hover:border-primary/25 hover:outline-primary/25" />
                        </label>

                        {/* Address */}
                        <label className="form-control w-full col-span-1">
                            <div className="label">
                                <span className="label-text">Question</span>
                            </div>
                            <textarea className="textarea textarea-bordered w-full rounded-none hover:border-primary/25 hover:outline-primary/25" placeholder="Enter Your Question Here"></textarea>
                        </label>
                    </form>
                </div>
                <DialogFooter>
                    <button type="submit" className="btn btn-primary rounded-none text-sm text-white py-0 font-semibold h-10 min-h-10">Send Question</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default DialogBox