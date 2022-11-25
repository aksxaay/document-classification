# Scenario -  Document Classification

Create an application that will do below


## Administrator UI
+ Ability to signin to the app
+ Maintain a list of allowed document classifications
+ Have a list of documents uploaded by a customer, with the document classification selected by the customer. 
+ Have a **system auto classification** of the document based on the content of the document(Using any content recognition/machine learning models) [***Key Feature***]
+ If as per the system classification, the document uploaded is not corresponding to one of the allowed classification, or if the customer classification and system classification are different, mark the document as rejected automatically and allow admin to review the system decision [***Key Feature***]
+ Based on manual review, admin should either reject the document and request for additional documents, or reclassify the document and mark as approved


## Document Classification Model [***Key Feature***]

+ Create a ML application which can read contents of the document/image.
+ Based on the content of the document, and based on keywords in the document, classify the document into one of the known classifications listed in the app. 
+ Input documents can have text/image/table data embedded in it. Extraction and Classification should take care of all such formats.


## Customer Facing UI
+ Have ability to signin to the app
+ Once inside the app, have a dashboard view which will list down the documents uploaded and approval status of the document
+ Upload a document and associate with a type of document (eg. Address Proof, ID Proof, Bank Statement etc.)
+ If administrator has rejected the document, have ability to reupload the document.



## Other Guidelines

### Input Data
+ Refer to the below path in repo for sample data

       - data
        |- <classification>
            |- files
+ This is grouped for different classification types, and is as per the expected document classification.

### Recommended Folder Structure
        - notebooks (to place the jupyter notebooks)
        - models (to place the saved models - if any)
        - app_ui (for the UI files)
        - app (for the backend files)
        - presentation (to place working demo videos and presentation explaining the architecture of the app)

### Steps to submit the code
+ Fork the repo to your team's git repo.
+ Create a branch with your team name.
+ You can make the changes to your branch locally.
+ Create a file called TestMe.md and mention  how to start the app and if any dependencies have to be downloaded to run the app locally
+ Do not push the branch to the STG repo till instructed.
+ At the end of the event, you can push your branch into the STG repo.

***Try not to use firebase or any internet provided services for creating or running the apps***
