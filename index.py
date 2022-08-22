from threading import Thread
from reach_rpc import mk_rpc
import time
from os import name

def main():
    rpc, rpc_callbacks = mk_rpc()
    #rpc("/stdlib/setProviderByName", "TestNet")
    Alice = 'Alice'
    Bidder1 = 'Bidder1'
    Bidder2 = 'Bidder2'
    Bidder3 = 'Bidder3'
    Bidder4 = 'Bidder4'
    Bidder5 = 'Bidder5'
    #p1acc_mnemonic = phrase[1]
    #p2acc_mnemonic = phrase[0]
    #acc_user1 = rpc("/stdlib/newAccountFromMnemonic", p1acc_mnemonic)
    #acc_user2 = rpc("/stdlib/newAccountFromMnemonic", p2acc_mnemonic)
    starting_balance = rpc("/stdlib/parseCurrency", 10000)
    Alice_acc = rpc("/stdlib/newTestAccount", starting_balance)
    Bidder1_acc = rpc("/stdlib/newTestAccount", starting_balance)
    Bidder2_acc = rpc("/stdlib/newTestAccount", starting_balance)
    Bidder3_acc = rpc("/stdlib/newTestAccount", starting_balance)
    Bidder4_acc = rpc("/stdlib/newTestAccount", starting_balance)
    Bidder5_acc = rpc("/stdlib/newTestAccount", starting_balance)
    NFT = rpc('/stdlib/launchToken', Alice_acc,'Tok', 'Tok1', 1)
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
    ctc_Alice = rpc("/acc/contract", Alice_acc)

    def Alice_func():
        minbid = int(input('enter minimum number: '))
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
        Bid = int(input('enter your bid biddder1: '))
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
        Bid = int(input('enter your bid biddder2: '))
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
        Bid = int(input('enter your bid biddder3: '))
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
        Bid = int(input('enter your bid biddder4: '))
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
        Bid = int(input('enter your bid biddder5: '))
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
    rpc("/forget/acc", Alice_acc, Bidder1_acc, Bidder2_acc, Bidder3_acc, Bidder4_acc, Bidder5_acc)
    rpc("/forget/ctc", ctc_Alice)

if __name__== "__main__":
    main()

