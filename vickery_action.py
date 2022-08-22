import threading
from tkinter import *
from turtle import bgcolor
from threading import Thread
from reach_rpc import mk_rpc
import time

Auctioner_list = []
Bidder1_list = []
Bidder2_list = []
Bidder3_list = []
Bidder4_list = []
Bidder5_list = []
Names = []
Bal_before = []
Bal_after = []

colour = "black"
colour2 = "white"
root = Tk()
root.title("Vickery auction game")
root.configure(background=colour)
def Auctioner():
    def nexttab():
        Auctioner_list.append(min_bid.get())
        top.destroy()
        lasttop = Toplevel()
        lasttop.configure(background=colour)
        lasttop.title("Auctioner")
        def view():
            if len(Bidder1_list) == 3 and len(Bidder2_list) == 3 and len(Bidder3_list) == 3 and len(Bidder4_list) == 3 and len(Bidder5_list) == 3:
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder1_list[0],Bidder1_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder2_list[0],Bidder2_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder3_list[0],Bidder3_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder4_list[0],Bidder4_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder5_list[0],Bidder5_list[2]))
                rpc, rpc_callbacks = mk_rpc()
                rpc("/stdlib/setProviderByName", "TestNet")
                Alice = Auctioner_list[0]
                Bidder1 = Bidder1_list[0]
                Bidder2 = Bidder2_list[0]
                Bidder3 = Bidder3_list[0]
                Bidder4 = Bidder4_list[0]
                Bidder5 = Bidder5_list[0]
                p1acc_mnemonic = Auctioner_list[1]
                p2acc_mnemonic = Bidder1_list[1]
                p3acc_mnemonic = Bidder2_list[1]
                p4acc_mnemonic = Bidder3_list[1]
                p5acc_mnemonic = Bidder4_list[1]
                p6acc_mnemonic = Bidder5_list[1]

                Alice_acc = rpc("/stdlib/newAccountFromMnemonic", p1acc_mnemonic)
                Bidder1_acc = rpc("/stdlib/newAccountFromMnemonic", p2acc_mnemonic)
                Bidder2_acc = rpc("/stdlib/newAccountFromMnemonic", p3acc_mnemonic)
                Bidder3_acc = rpc("/stdlib/newAccountFromMnemonic", p4acc_mnemonic)
                Bidder4_acc = rpc("/stdlib/newAccountFromMnemonic", p5acc_mnemonic)
                Bidder5_acc = rpc("/stdlib/newAccountFromMnemonic", p6acc_mnemonic)
               
                NFT = rpc('/stdlib/launchToken', Alice_acc,'Tok', 'Tok1',int(Auctioner_list[2]))
                Bids = []
                Adddress = []
                def fmt(x):
                    return rpc("/stdlib/formatCurrency", x, 4)

                def get_balance(w):
                    return fmt(rpc("/stdlib/balanceOf", w))
                def get_nftbal(acc,id):
                    return rpc('/stdlib/balanceOf', acc,id)
                def get_address(s):
                    return(rpc("/acc/getAddress", s))
                Alice_before = get_balance(Alice_acc)
                Bidder1_before = get_balance(Bidder1_acc)
                Bidder2_before = get_balance(Bidder2_acc)
                Bidder3_before = get_balance(Bidder3_acc)
                Bidder4_before = get_balance(Bidder4_acc)
                Bidder5_before = get_balance(Bidder5_acc)
                n1 = NFT['token']['id']
                n2 = rpc('/stdlib/bigNumberToNumber', n1)
                print('The id is %s'%n2)
                Alice_nftbal = get_nftbal(Alice_acc,n1)
                Bidder1_nftbal = get_nftbal(Bidder1_acc,n1)
                Bidder2_nftbal = get_nftbal(Bidder2_acc,n1)
                Bidder3_nftbal = get_nftbal(Bidder3_acc,n1)
                Bidder4_nftbal = get_nftbal(Bidder4_acc,n1)
                Bidder5_nftbal = get_nftbal(Bidder5_acc,n1)
                pr1 = "%s starting balance is %s algo and 1 nft" %(Alice,Alice_before)
                pr2 = "%s starting balance is %s algo and 0 nft"%(Bidder1,Bidder1_before)
                pr3 = "%s starting balance is %s algo and 0 nft"%(Bidder2,Bidder2_before)
                pr4 = "%s starting balance is %s algo and 0 nft"%(Bidder3,Bidder3_before)
                pr5 = "%s starting balance is %s algo and 0 nft"%(Bidder4,Bidder4_before)
                pr6 = "%s starting balance is %s algo and 0 nft"%(Bidder5,Bidder5_before)
                print(pr1)
                print(pr2)
                print(pr3)
                print(pr4)
                print(pr5)
                print(pr6)
                Bal_before.append(pr1)
                Bal_before.append(pr2)
                Bal_before.append(pr3)
                Bal_before.append(pr4)
                Bal_before.append(pr5)
                Bal_before.append(pr6)
                ctc_Alice = rpc("/acc/contract", Alice_acc)

                def Alice_func():
                    minbid = Auctioner_list[3]
                    def getwinneradd():
                        Bidder1_pair = [Adddress[0],Bids[0]]
                        Bidder2_pair = [Adddress[1],Bids[1]]
                        Bidder3_pair = [Adddress[2],Bids[2]]
                        Bidder4_pair = [Adddress[3],Bids[3]]
                        Bidder5_pair = [Adddress[4],Bids[4]]
                        SL = sorted(Bids)
                        if SL[4] == Bidder1_pair[1] : 
                            return rpc("/acc/getAddress", Bidder1_acc)
                        elif SL[4] == Bidder2_pair[1]:
                            return rpc("/acc/getAddress", Bidder2_acc)
                        elif SL[4] == Bidder3_pair[1]:
                            return rpc("/acc/getAddress", Bidder3_acc)
                        elif SL[4] == Bidder4_pair[1]:
                            return rpc("/acc/getAddress", Bidder4_acc) 
                        elif SL[4] == Bidder5_pair[1]:
                            return rpc("/acc/getAddress", Bidder5_acc)
                    def getsecondbid():
                        SL = sorted(Bids)
                        return rpc("/stdlib/parseCurrency", SL[3])
                    rpc_callbacks(
                        "/backend/Alice",
                        ctc_Alice,
                        dict(NFTId = rpc("/stdlib/bigNumberToNumber",NFT['token']['id']), minbid = minbid ,getwinneradd = getwinneradd,getsecondbid = getsecondbid )
                    )

                alice = Thread(target = Alice_func)
                alice.start()

                def Bidder1_func():
                    Bid = int(Bidder1_list[2])
                    addres = get_address(Bidder1_acc)
                    Bids.append(Bid)
                    Adddress.append(addres)
                    def tok(ids):
                        rpc("/acc/tokenAccept",Bidder1_acc,ids)
                    ctc_bid1 = rpc("/acc/contract", Bidder1_acc, rpc("/ctc/getInfo", ctc_Alice))
                    rpc_callbacks(
                        "/backend/Bidder1",
                        ctc_bid1,
                        dict(bid = rpc("/stdlib/parseCurrency", Bid),accepttok=tok)
                    )
                    rpc("/forget/ctc", ctc_bid1)
                bid1 = Thread(target = Bidder1_func)
                bid1.start()

                def Bidder2_func():
                    Bid = int(Bidder2_list[2])
                    addres = get_address(Bidder2_acc)
                    Bids.append(Bid)
                    Adddress.append(addres)
                    def tok(ids):
                        rpc("/acc/tokenAccept",Bidder2_acc,ids)
                    ctc_bid2 = rpc("/acc/contract", Bidder2_acc, rpc("/ctc/getInfo", ctc_Alice))
                    rpc_callbacks(
                        "/backend/Bidder2",
                        ctc_bid2,
                        dict(bid = rpc("/stdlib/parseCurrency", Bid), accepttok = tok)
                    )
                    rpc("/forget/ctc", ctc_bid2)
                bid2 = Thread(target = Bidder2_func)
                bid2.start()

                def Bidder3_func():
                    Bid = int(Bidder3_list[2])
                    addres = get_address(Bidder3_acc)
                    Bids.append(Bid)
                    Adddress.append(addres)
                    def tok(ids):
                        rpc("/acc/tokenAccept",Bidder3_acc,ids)
                    ctc_bid3 = rpc("/acc/contract", Bidder3_acc, rpc("/ctc/getInfo", ctc_Alice))
                    rpc_callbacks(
                        "/backend/Bidder3",
                        ctc_bid3,
                        dict(bid = rpc("/stdlib/parseCurrency", Bid), accepttok=tok)
                    )
                    rpc("/forget/ctc", ctc_bid3)
                bid3 = Thread(target = Bidder3_func)
                bid3.start()

                def Bidder4_func():
                    Bid = int(Bidder4_list[2])
                    addres = get_address(Bidder4_acc)
                    Bids.append(Bid)
                    Adddress.append(addres)
                    def tok(ids):
                        rpc("/acc/tokenAccept",Bidder4_acc,ids)
                    ctc_bid4 = rpc("/acc/contract", Bidder4_acc, rpc("/ctc/getInfo", ctc_Alice))
                    rpc_callbacks(
                        "/backend/Bidder4",
                        ctc_bid4,
                        dict(bid = rpc("/stdlib/parseCurrency", Bid), accepttok = tok)
                    )
                    rpc("/forget/ctc", ctc_bid4)
                bid4 = Thread(target = Bidder4_func)
                bid4.start()

                def Bidder5_func():
                    Bid = int(Bidder5_list[2])
                    addres = get_address(Bidder5_acc)
                    Bids.append(Bid)
                    Adddress.append(addres)
                    def tok(ids):
                        rpc("/acc/tokenAccept",Bidder5_acc,ids)
                    ctc_bid5 = rpc("/acc/contract", Bidder5_acc, rpc("/ctc/getInfo", ctc_Alice))
                    rpc_callbacks(
                        "/backend/Bidder5",
                        ctc_bid5,
                        dict(bid = rpc("/stdlib/parseCurrency", Bid), accepttok = tok)
                    )
                    rpc("/forget/ctc", ctc_bid5)
                bid5 = Thread(target = Bidder5_func)
                bid5.start()

                alice.join()
                bid1.join()
                bid2.join()
                bid3.join()
                bid4.join()
                bid5.join()
                
                Alice_after = get_balance(Alice_acc)
                Bidder1_after = get_balance(Bidder1_acc)
                Bidder2_after = get_balance(Bidder2_acc)
                Bidder3_after = get_balance(Bidder3_acc)
                Bidder4_after = get_balance(Bidder4_acc)
                Bidder5_after = get_balance(Bidder5_acc)

                Alice_nftbal_after = get_nftbal(Alice_acc,n1)
                Bidder1_nftbal_after = get_nftbal(Bidder1_acc,n1)
                Bidder2_nftbal_after = get_nftbal(Bidder2_acc,n1)
                Bidder3_nftbal_after = get_nftbal(Bidder3_acc,n1)
                Bidder4_nftbal_after = get_nftbal(Bidder4_acc,n1)
                Bidder5_nftbal_after = get_nftbal(Bidder5_acc,n1)
                if Alice_nftbal == Alice_nftbal_after:
                    prr1 = "%s went from %s to %s and 1 token" % (Alice,Alice_before,Alice_after)
                else:
                    prr1 = "%s went from %s to %s and 0 token" % (Alice,Alice_before,Alice_after)
                if Bidder1_nftbal == Bidder1_nftbal_after:
                    prr2 = "%s went from %s to %s and 0 token" % (Bidder1,Bidder1_before, Bidder1_after)
                else:
                    prr2 = "%s went from %s to %s and 1 token" % (Bidder1,Bidder1_before, Bidder1_after)
                if Bidder2_nftbal == Bidder2_nftbal_after:
                    prr3 = "%s went from %s to %s and 0 tokens" % (Bidder2,Bidder2_before, Bidder2_after)
                else:
                    prr3 = "%s went from %s to %s and 1 token" % (Bidder2,Bidder2_before, Bidder2_after)
                if Bidder3_nftbal == Bidder3_nftbal_after:
                    prr4 = "%s went from %s to %s and 0 token" % (Bidder3,Bidder3_before, Bidder3_after)
                else:
                    prr4 = "%s went from %s to %s and 1 token" % (Bidder3,Bidder3_before, Bidder3_after)
                if Bidder4_nftbal == Bidder4_nftbal_after:
                    prr5 = "%s went from %s to %s and 0 token" % (Bidder4,Bidder4_before, Bidder4_after)
                else:
                    prr5 = "%s went from %s to %s and 1 token" % (Bidder4,Bidder4_before, Bidder4_after)
                if Bidder5_nftbal == Bidder5_nftbal_after:
                    prr6 = "%s went from %s to %s and 0 token" % (Bidder5,Bidder5_before, Bidder5_after)
                else:
                    prr6 = "%s went from %s to %s and 1 token" % (Bidder5,Bidder5_before, Bidder5_after)

                print(prr1)
                print(prr2)
                print(prr3)
                print(prr4)
                print(prr5)
                print(prr6)
                Bal_after.append(prr1)
                Bal_after.append(prr2)
                Bal_after.append(prr3)
                Bal_after.append(prr4)
                Bal_after.append(prr5)
                Bal_after.append(prr6)
                rpc("/forget/acc", Alice_acc, Bidder1_acc, Bidder2_acc, Bidder3_acc, Bidder4_acc, Bidder5_acc)
                rpc("/forget/ctc", ctc_Alice)

            else:
                Textbox1.insert(END, "\nWaiting for all bidders to place bids")

        def see_bal():
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_before[0],Bal_before[1],Bal_before[2],Bal_before[3],Bal_before[4],Bal_before[5]))
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_after[0],Bal_after[1],Bal_after[2],Bal_after[3],Bal_after[4],Bal_after[5]))
        def exitt():
            root.destroy()
        label = Label(
                lasttop,
                text="Auctioner\nClick the button 'View bidding war' to seebidding war and result\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=45,
                height=8,
                bg=colour,
                fg=colour2,
            ).pack()
        Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
        Textbox1.pack(expand=True)
        btn1 = Button(lasttop, text="View bidding war", command = view).pack()
        btn2 = Button(lasttop, text="See balance",command =see_bal).pack()
        btn3 = Button(lasttop, text="exit",command = exitt ).pack()
    top = Toplevel()
    top.configure(background=colour)
    top.title("Auctioner")
    def namestore():
        if len(Auctioner_list) < 1:
            Auctioner_list.append(name.get())
        else:
            Auctioner_list[0] = name.get()

    def mnemonicstore():
        if len(Auctioner_list) < 2:
            Auctioner_list.append(mnemonic_phrase.get())
        else:
            Auctioner_list[1] = mnemonic_phrase.get()
    def nftnumstore():
        if len(Bidder1_list) < 3:
            Auctioner_list.append(funds.get())
        else:
            Auctioner_list[2] = funds.get()
    my_label = Label(
        top,
        font=50,
        text="Welcome Auctioner!",
        width=50,
        height=12,
        bg=colour,
        fg=colour2,
    ).pack()
    Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    name = StringVar()
    enter_name = Entry(top, textvariable=name, width=20).pack()
    name_btn = Button(top, text="Enter",command= namestore).pack()
    mnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    mnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
    mnemonic_btn = Button(top, text="Enter", command = mnemonicstore).pack()
    funds_label = Label(
        top, font=50, text="Enter number of Nfts to mint", bg=colour, fg=colour2
    ).pack()
    funds = StringVar()
    funds_entry = Entry(top, font=50, textvariable=funds).pack()
    enter_funds = Button(top, text="Enter", command= nftnumstore).pack()
    minbid_label = Label(
        top, font=50, text="Enter minbid", bg=colour, fg=colour2
    ).pack()
    min_bid = StringVar()
    min_bid_entry = Entry(top, font = 50, textvariable=min_bid).pack()
    min_bid_button = Button(top, text='Deploy', command = nexttab).pack()

def Bidder1():
    def nexttab():
        Bidder1_list.append(funds.get())
        top.destroy()
        lasttop = Toplevel()
        lasttop.configure(background=colour)
        lasttop.title("Bidder1")
        def view():
            if len(Bidder1_list) == 3 and len(Bidder2_list) == 3 and len(Bidder3_list) == 3 and len(Bidder4_list) == 3 and len(Bidder5_list) == 3:
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder1_list[0],Bidder1_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder2_list[0],Bidder2_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder3_list[0],Bidder3_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder4_list[0],Bidder4_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder5_list[0],Bidder5_list[2]))
            else:
                Textbox1.insert(END, "\nWaiting for all bidders to place bids")
        def see_bal():
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_before[0],Bal_before[1],Bal_before[2],Bal_before[3],Bal_before[4],Bal_before[5]))
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_after[0],Bal_after[1],Bal_after[2],Bal_after[3],Bal_after[4],Bal_after[5]))
        def exitt():
            lasttop.destroy()
        label = Label(
                lasttop,
                text="Bidder1\nClick the button 'View bidding war' to seebidding war and result\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=45,
                height=8,
                bg=colour,
                fg=colour2,
            ).pack()
        Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
        Textbox1.pack(expand=True)
        btn1 = Button(lasttop, text="View bidding war", command= view).pack()
        btn2 = Button(lasttop, text="See balance",command = see_bal).pack()
        btn3 = Button(lasttop, text="exit", command = exitt).pack()
    top = Toplevel()
    top.configure(background=colour)
    top.title("Bidder1")
    def namestore():
        if len(Bidder1_list) < 1:
            Bidder1_list.append(name.get())
        else:
            Bidder1_list[0] = name.get()

    def mnemonicstore():
        if len(Bidder1_list) < 2:
            Bidder1_list.append(mnemonic_phrase.get())
        else:
            Bidder1_list[1] = mnemonic_phrase.get()
    my_label = Label(
        top,
        font=50,
        text="Welcome Bidder1!",
        width=50,
        height=12,
        bg=colour,
        fg=colour2,
    ).pack()
    Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    name = StringVar()
    enter_name = Entry(top, textvariable=name, width=20).pack()
    name_btn = Button(top, text="Enter", command = namestore).pack()
    mnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    mnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
    mnemonic_btn = Button(top, text="Enter", command = mnemonicstore).pack()
    funds_label = Label(
        top, font=50, text="Enter Bid", bg=colour, fg=colour2
    ).pack()
    funds = StringVar()
    funds_entry = Entry(top, font=50, textvariable=funds).pack()
    enter_funds = Button(top, text="Enter", command = nexttab).pack()

def Bidder2():
    def nexttab():
        Bidder2_list.append(funds.get())
        top.destroy()
        lasttop = Toplevel()
        lasttop.configure(background=colour)
        lasttop.title("Bidder2")

        def view():
            if len(Bidder1_list) == 3 and len(Bidder2_list) == 3 and len(Bidder3_list) == 3 and len(Bidder4_list) == 3 and len(Bidder5_list) == 3:
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder1_list[0],Bidder1_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder2_list[0],Bidder2_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder3_list[0],Bidder3_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder4_list[0],Bidder4_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder5_list[0],Bidder5_list[2]))
            else:
                Textbox1.insert(END, "\nWaiting for all bidders to place bids")
        def see_bal():
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_before[0],Bal_before[1],Bal_before[2],Bal_before[3],Bal_before[4],Bal_before[5]))
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_after[0],Bal_after[1],Bal_after[2],Bal_after[3],Bal_after[4],Bal_after[5]))
        def exitt():
            lasttop.destroy()

        label = Label(
                lasttop,
                text="Bidder2\nClick the button 'View bidding war' to seebidding war and result\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=45,
                height=8,
                bg=colour,
                fg=colour2,
            ).pack()
        Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
        Textbox1.pack(expand=True)
        btn1 = Button(lasttop, text="View bidding war", command = view).pack()
        btn2 = Button(lasttop, text="See balance", command = see_bal).pack()
        btn3 = Button(lasttop, text="exit", command = exitt).pack()
    top = Toplevel()
    top.configure(background=colour)
    top.title("Bidder2")
    def namestore():
        if len(Bidder2_list) < 1:
            Bidder2_list.append(name.get())
        else:
            Bidder2_list[0] = name.get()

    def mnemonicstore():
        if len(Bidder2_list) < 2:
            Bidder2_list.append(mnemonic_phrase.get())
        else:
            Bidder2_list[1] = mnemonic_phrase.get()
    my_label = Label(
        top,
        font=50,
        text="Welcome Bidder2!",
        width=50,
        height=12,
        bg=colour,
        fg=colour2,
    ).pack()
    Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    name = StringVar()
    enter_name = Entry(top, textvariable=name, width=20).pack()
    name_btn = Button(top, text="Enter", command = namestore).pack()
    mnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    mnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
    mnemonic_btn = Button(top, text="Enter", command = mnemonicstore).pack()
    funds_label = Label(
        top, font=50, text="Enter Bid", bg=colour, fg=colour2
    ).pack()
    funds = StringVar()
    funds_entry = Entry(top, font=50, textvariable=funds).pack()
    enter_funds = Button(top, text="Enter", command = nexttab).pack()

def Bidder3():
    def nexttab():
        Bidder3_list.append(funds.get())
        top.destroy()
        lasttop = Toplevel()
        lasttop.configure(background=colour)
        lasttop.title("Bidder3")
        def view():
            if len(Bidder1_list) == 3 and len(Bidder2_list) == 3 and len(Bidder3_list) == 3 and len(Bidder4_list) == 3 and len(Bidder5_list) == 3:
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder1_list[0],Bidder1_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder2_list[0],Bidder2_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder3_list[0],Bidder3_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder4_list[0],Bidder4_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder5_list[0],Bidder5_list[2]))
            else:
                Textbox1.insert(END, "\nWaiting for all bidders to place bids")
        def see_bal():
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_before[0],Bal_before[1],Bal_before[2],Bal_before[3],Bal_before[4],Bal_before[5]))
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_after[0],Bal_after[1],Bal_after[2],Bal_after[3],Bal_after[4],Bal_after[5]))
        def exitt():
            lasttop.destroy()
        label = Label(
                lasttop,
                text="Bidder3\nClick the button 'View bidding war' to seebidding war and result\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=45,
                height=8,
                bg=colour,
                fg=colour2,
            ).pack()
        Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
        Textbox1.pack(expand=True)
        btn1 = Button(lasttop, text="View bidding war", command= view).pack()
        btn2 = Button(lasttop, text="See balance", command = see_bal).pack()
        btn3 = Button(lasttop, text="exit", command = exitt).pack()
    top = Toplevel()
    top.configure(background=colour)
    top.title("Bidder3")

    def namestore():
        if len(Bidder3_list) < 1:
            Bidder3_list.append(name.get())
        else:
            Bidder3_list[0] = name.get()

    def mnemonicstore():
        if len(Bidder3_list) < 2:
            Bidder3_list.append(mnemonic_phrase.get())
        else:
            Bidder3_list[1] = mnemonic_phrase.get()
    my_label = Label(
        top,
        font=50,
        text="Welcome Bidder3!",
        width=50,
        height=12,
        bg=colour,
        fg=colour2,
    ).pack()
    Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    name = StringVar()
    enter_name = Entry(top, textvariable=name, width=20).pack()
    name_btn = Button(top, text="Enter", command = namestore).pack()
    mnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    mnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
    mnemonic_btn = Button(top, text="Enter", command = mnemonicstore).pack()
    funds_label = Label(
        top, font=50, text="Enter Bid", bg=colour, fg=colour2
    ).pack()
    funds = StringVar()
    funds_entry = Entry(top, font=50, textvariable=funds).pack()
    enter_funds = Button(top, text="Enter", command = nexttab).pack()

def Bidder4():
    def nexttab():
        Bidder4_list.append(funds.get())
        top.destroy()
        lasttop = Toplevel()
        lasttop.configure(background=colour)
        lasttop.title("Bidder4")
        def view():
            if len(Bidder1_list) == 3 and len(Bidder2_list) == 3 and len(Bidder3_list) == 3 and len(Bidder4_list) == 3 and len(Bidder5_list) == 3:
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder1_list[0],Bidder1_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder2_list[0],Bidder2_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder3_list[0],Bidder3_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder4_list[0],Bidder4_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder5_list[0],Bidder5_list[2]))
            else:
                Textbox1.insert(END, "\nWaiting for all bidders to place bids")
        def see_bal():
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_before[0],Bal_before[1],Bal_before[2],Bal_before[3],Bal_before[4],Bal_before[5]))
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_after[0],Bal_after[1],Bal_after[2],Bal_after[3],Bal_after[4],Bal_after[5]))
        def exitt():
            lasttop.destroy()
        label = Label(
                lasttop,
                text="Bidder4\nClick the button 'View bidding war' to seebidding war and result\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=45,
                height=8,
                bg=colour,
                fg=colour2,
            ).pack()
        Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
        Textbox1.pack(expand=True)
        btn1 = Button(lasttop, text="View bidding war", command = view).pack()
        btn2 = Button(lasttop, text="See balance", command = see_bal).pack()
        btn3 = Button(lasttop, text="exit", command = exitt).pack()
    top = Toplevel()
    top.configure(background=colour)
    top.title("Bidder4")

    def namestore():
        if len(Bidder4_list) < 1:
            Bidder4_list.append(name.get())
        else:
            Bidder4_list[0] = name.get()

    def mnemonicstore():
        if len(Bidder4_list) < 2:
            Bidder4_list.append(mnemonic_phrase.get())
        else:
            Bidder4_list[1] = mnemonic_phrase.get()
    my_label = Label(
        top,
        font=50,
        text="Welcome Bidder4!",
        width=50,
        height=12,
        bg=colour,
        fg=colour2,
    ).pack()
    Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    name = StringVar()
    enter_name = Entry(top, textvariable=name, width=20).pack()
    name_btn = Button(top, text="Enter", command = namestore).pack()
    mnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    mnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
    mnemonic_btn = Button(top, text="Enter", command = mnemonicstore).pack()
    funds_label = Label(
        top, font=50, text="Enter Bid", bg=colour, fg=colour2
    ).pack()
    funds = StringVar()
    funds_entry = Entry(top, font=50, textvariable=funds).pack()
    enter_funds = Button(top, text="Enter", command = nexttab).pack()

def Bidder5():
    def nexttab():
        Bidder5_list.append(funds.get())
        top.destroy()
        lasttop = Toplevel()
        lasttop.configure(background=colour)
        lasttop.title("Bidder5")
        def view():
            if len(Bidder1_list) == 3 and len(Bidder2_list) == 3 and len(Bidder3_list) == 3 and len(Bidder4_list) == 3 and len(Bidder5_list) == 3:
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder1_list[0],Bidder1_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder2_list[0],Bidder2_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder3_list[0],Bidder3_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder4_list[0],Bidder4_list[2]))
                Textbox1.insert(END, "\n%s placed a bid of %s"%(Bidder5_list[0],Bidder5_list[2]))
            else:
                Textbox1.insert(END, "\nWaiting for all bidders to place bids")
        def see_bal():
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_before[0],Bal_before[1],Bal_before[2],Bal_before[3],Bal_before[4],Bal_before[5]))
            Textbox1.insert(END,"\n%s\n%s\n%s\n%s\n%s\n%s" %(Bal_after[0],Bal_after[1],Bal_after[2],Bal_after[3],Bal_after[4],Bal_after[5]))
        def exitt():
            lasttop.destroy()
        label = Label(
                lasttop,
                text="Bidder5\nClick the button 'View bidding war' to seebidding war and result\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=45,
                height=8,
                bg=colour,
                fg=colour2,
            ).pack()
        Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
        Textbox1.pack(expand=True)
        btn1 = Button(lasttop, text="View bidding war", command = view).pack()
        btn2 = Button(lasttop, text="See balance", command = see_bal).pack()
        btn3 = Button(lasttop, text="exit", command = exitt).pack()
    top = Toplevel()
    top.configure(background=colour)
    top.title("Bidder5")

    def namestore():
        if len(Bidder5_list) < 1:
            Bidder5_list.append(name.get())
        else:
            Bidder5_list[0] = name.get()

    def mnemonicstore():
        if len(Bidder5_list) < 2:
            Bidder5_list.append(mnemonic_phrase.get())
        else:
            Bidder5_list[1] = mnemonic_phrase.get()
    my_label = Label(
        top,
        font=50,
        text="Welcome Bidder5!",
        width=50,
        height=12,
        bg=colour,
        fg=colour2,
    ).pack()
    Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    name = StringVar()
    enter_name = Entry(top, textvariable=name, width=20).pack()
    name_btn = Button(top, text="Enter", command = namestore).pack()
    mnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    mnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
    mnemonic_btn = Button(top, text="Enter", command = mnemonicstore).pack()
    funds_label = Label(
        top, font=50, text="Enter Bid", bg=colour, fg=colour2
    ).pack()
    funds = StringVar()
    funds_entry = Entry(top, font=50, textvariable=funds).pack()
    enter_funds = Button(top, text="Enter", command = nexttab).pack()
img = Label(
    root,
    text="Welcome to VICKERY AUCTION GAME",
    bg="black",
    fg="white",
    width=50,
    height=20,
    font=50,
).pack()
User_state = Label(
    root,
    text="Select player state Auctioner /Bidder below",
    font=100,
    bg=colour,
    fg=colour2,
).pack()
btn1 = Button(root, text="Auctioner", font=50, command= Auctioner).pack()
btn2 = Button(root, text="Bidder1", font=50, command = Bidder1).pack()
btn3 = Button(root, text="Bidder2", font = 50, command = Bidder2).pack()
btn4 = Button(root, text="Bidder3", font = 50, command = Bidder3).pack()
btn5 = Button(root, text="Bidder4", font = 50, command = Bidder4).pack()
btn6 = Button(root, text="Bidder5", font = 50, command = Bidder5).pack()

root.mainloop()