"use client";

import Link from "next/link";
import {useParams} from "next/navigation";
import Image from "next/image";

export default function Post() {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 gap-4">
                    <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">How to train at home</h2>
                    <Link href="#" className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base">Like</Link>
                </div>

                <div className="flex flex-col bg-white p-6 sm:p-8 rounded-xl gap-4">
                    <div className="text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus euismod urna, quis fringilla felis consequat eget. Fusce finibus quis dui ac pellentesque. Morbi dapibus ultrices velit eget faucibus. Curabitur feugiat dui sed consectetur fermentum. Quisque vitae egestas nulla. Aenean non luctus libero, eu euismod sem. Praesent eu pharetra eros, sed sollicitudin orci. Sed nec elit ut leo ullamcorper pretium nec eu turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent congue ac tortor nec dignissim. <br/><br/>

                        Aliquam arcu felis, sagittis et maximus nec, auctor at nulla. Phasellus ultricies bibendum ipsum, et lobortis turpis semper ullamcorper. Etiam sit amet ipsum sed magna condimentum efficitur. Pellentesque mattis, libero nec luctus faucibus, lectus odio eleifend quam, et semper risus mi et metus. Fusce vestibulum eget est et tincidunt. Pellentesque non tempus leo. Mauris eget leo ipsum. Nulla bibendum neque vel mi eleifend, nec viverra justo efficitur. Maecenas velit lorem, facilisis condimentum lacus vel, finibus fermentum ipsum. Donec gravida hendrerit ex. Donec a gravida nibh.<br/><br/>

                        Fusce egestas massa ut urna commodo lobortis. Nunc euismod viverra scelerisque. Curabitur metus libero, varius eu vestibulum sed, bibendum vel augue. Mauris efficitur, justo et feugiat pulvinar, eros ligula aliquet tellus, a molestie ante ipsum et nibh. Morbi id rhoncus lorem. Sed varius urna eu nisi tincidunt, at hendrerit magna efficitur. Quisque venenatis tristique augue quis condimentum. In blandit iaculis augue, sed sodales leo. Aliquam quis est sit amet ligula faucibus vulputate ut in nisi. Vestibulum fringilla, tellus non dictum condimentum, ante justo dignissim ipsum, ut fermentum leo leo sed ex. Aenean lacus risus, hendrerit eget purus vitae, viverra tincidunt elit. Quisque vel augue at massa maximus dictum. Pellentesque vehicula sed eros feugiat sagittis. Donec in leo placerat arcu faucibus interdum. Aliquam dignissim condimentum lorem id vulputate. <br/><br/>

                        Sed bibendum at est id congue. Donec viverra diam id condimentum rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mattis lacus et odio tristique, eleifend fermentum mauris aliquet. Morbi quis mi nibh. Sed vel velit vitae orci condimentum maximus. Maecenas in rhoncus turpis. Ut lacinia justo sem, sit amet consectetur urna finibus vel.<br/><br/>

                        Quisque augue tellus, ultrices in risus at, pulvinar molestie augue. Ut sit amet fermentum mauris. Aenean mattis, augue cursus ultricies suscipit, dolor nisl tempus arcu, nec consequat mi turpis nec orci. Fusce eu sapien ultricies, scelerisque purus sed, scelerisque nisi. Integer accumsan tortor bibendum, egestas enim sit amet, commodo ante. Nunc efficitur est a interdum rutrum. Phasellus id lorem felis. Integer cursus sed odio at iaculis. Nullam eu quam lectus. Aenean velit nisi, mollis id ullamcorper id, ullamcorper vitae est. Ut aliquet lectus non libero pulvinar, ac scelerisque eros molestie. Maecenas laoreet urna est, eget sollicitudin justo tristique at.
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex gap-2 items-center">
                            <Image src={"/icons/user.svg"} alt={"user"} width={16} height={16} />
                            <p className="font-bold">@Username</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image src={"/icons/calandar.svg"} alt={"calandar"} width={16} height={16} />
                            <p className="font-bold">JJ/MM/YYYY</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 gap-4">
                    <h2 className="text-3xl sm:text-4xl font-bold uppercase text-white">Comments</h2>
                    <Link href="#" className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base">Leave a comment</Link>
                </div>

                {[1, 2].map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row gap-6 px-6 py-6 bg-white rounded-xl justify-between items-start sm:items-center"
                    >
                        <div className="flex flex-col gap-2 text-sm sm:text-base">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus euismod urna, quis fringilla felis consequat eget. Fusce finibus quis dui ac pellentesque. Morbi dapibus ultrices velit eget faucibus. Curabitur feugiat dui sed consectetur fermentum. Quisque vitae egestas nulla. Aenean non luctus libero, eu euismod sem. Praesent eu pharetra eros, sed sollicitudin orci. Sed nec elit ut leo ullamcorper pretium nec eu turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent congue ac tortor nec dignissim.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex gap-2 items-center">
                                    <Image src={"/icons/user.svg"} alt={"user"} width={16} height={16} />
                                    <p className="font-bold">@Username</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={"/icons/calandar.svg"} alt={"calandar"} width={16} height={16} />
                                    <p className="font-bold">JJ/MM/YYYY</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link href="#" className="bg-[#FFD600] rounded-md px-4 py-2 font-bold text-sm sm:text-base">Like</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
