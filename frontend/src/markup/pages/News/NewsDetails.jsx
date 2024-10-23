import React from "react";
import hiv from "../../../assets/img/10001.jpg";

function NewsDetails() {
  return (
    <div>
      <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">News Portal</h1>
      </header>
      <section className="blog-details-area py-8">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="post-details-content bg-white rounded-lg shadow-lg p-6">
                <div className="post-details-body">
                  <div className="content">
                    <h2 className="title text-2xl font-semibold mb-4 text-gray-800">
                      እነዚህ ከሚያንቀሳቀሱ ሹፌሮች የማማከር ጉዳዮች በአጠቃላይ እንዲህ ሆኑ፦
                    </h2>
                    <img
                      src={hiv}
                      alt="News Image"
                      style={{ width: "490px", height: "300px" }}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="meta text-sm text-gray-600 mb-4">
                      <a
                        className="category text-blue-500 hover:underline"
                        href="blog.html"
                      >
                        News
                      </a>
                      <span className="mx-2">-</span> December 14th, 2023 by
                      <a
                        className="author text-blue-500 hover:underline"
                        href="blog.html"
                      >
                        Admin
                      </a>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ብዙ ጊዜ አሳብ መግደል (ideacide) ሳንስተው ያለውን እንደሆነ እንያውቅ እንቀላቀላለን።
                      አንድ የተለየ እና የተልዕኮ ሀሳብ ወይም መፍትሄ እንደ እረኛ ይታየና ይጠፋ እንደሌለ በጉጉት
                      ይቀርብብናል። የበለፀጉ እንዲህ ያሉ ነገሮች ከዚህ በፊት ከህይወት ሳይወጡ ምክንያቱም
                      ራሳችንን በስንታች እናቈጽማለን ወይም ለውጥ በመጠበቅ የተለመደ ነገርን እንረሳለን፣ ራሳችንን
                      በፍርሃት እናገድዋለን። የወልሽ አምሪክ አውራጃ ሳራ ዎተርስ እንዲህ በጥሩ ቃላት እየጠቀሰች
                      ታቀረች፣ “አንድ የስንብት መንገድ ሲጽፍ በመካከለኛው ያለችው አሳሽ በጣም አሳዛኝ ስንቅ
                      ሳለው ትታያለች፣ ምንም በዚህ ላይ እንዳለ ታጥቃለች እና ከዚህ ላይ በፍጥነት የታላቁ ጉርሻ፣
                      የነዋሪዎች ማንኛውም የማስታወቂያ ድምፅ፣ የሚበልህ ድካም፣ የማንደራም ሕምም፣
                      እንቀላቀሉናል…” <br /> በአማርኛ እንኳን ራሳችንን እንበረዛለን። ካርል ጁንግ ይህንን
                      እንደ "የውስጥ ተስፋ አሳዛኝ ድምፅ" ተወዳጅ እና ያነሳሉ። <br /> ማይካል ሬይ እና
                      ሮቼል ማየርስ በተወዳጅ መጽሐፍ በስራች እንደ አትንቶ ያቀረቡትን ሕዝባዊ ስልጣን የሚጠቀሙ
                      የስነ ተስፋ ምክር ነው።
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsDetails;
