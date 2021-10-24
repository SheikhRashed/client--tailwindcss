<template lang="">
    <div class="relative py-16 lg:py-24 ">
        <!-- team wrapper start   -->
        <div class="container">
            <!-- Top start  -->
            <div class="flex justify-between flex-col lg:flex-row items-center">
                <!-- left start -->
                <div class=" lg:w-2/4 text-center lg:text-left">
                    <h2 class=" text-5xl  md:text-7xl leading-tight  text-gray-800 capitalize mb-4 lg:mb-32 " >Leading <br class="hidden lg:block">  the way</h2>
                    <p class=" text-lg  md:text-xl leading-7 mb-12 lg:mb-0 text-gray-800" >
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <!-- left end -->

                <!-- right start -->
                <div class="lg:w-2/4">
                <!-- Team Members start  -->
                    <div>
                        <!-- Team Member start  -->
                           <div class="flex justify-end flex-col md:flex-row space-y-10 md:space-y-0  md:space-x-14">
                               <Profile v-for="item in listofPeople" v-bind:key="item.id" :profile="item"  />
                           </div>
                        <!-- Team Member end -->
                    </div>
                <!-- Team Members start  -->
                </div>
                <!-- right end -->
            </div>
            <!-- Top  end  -->

            <!--  bottom start  -->

              <!-- Members of   -->
              <div class=" grid  grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-10 sm:gap-20  mt-28 ">
                   <Profile v-for="member in listofMember" v-bind:key="member.id" :profile="member"  />
              </div>

            <!--  bottom end  -->
        </div>
        <!-- team wrapper end   -->
    </div>
</template>
<script>

// import Team from '../../s'

import Profile from '../Profile/Profile.vue';


export default {
    name: 'Team',
    components: { 
        Profile,
    },
        data() { 
        return { 
            
    listofPeople: [
              {
                  id: 1,
               
                  img: 'https://images.pexels.com/photos/64385/pexels-photo-64385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  name: 'Katy Lin',
                  designation: 'Chief Executive  Officer',
              },
              {
                  id: 2,
                  img: 'https://images.pexels.com/photos/1161668/pexels-photo-1161668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  name: 'Katy Lin',
                  designation: 'Chief Executive  Officer',
              },

          ],
    listofMember: [
                      {
                  id: 1,
                  img: 'https://images.pexels.com/photos/6275786/pexels-photo-6275786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  name: 'Katy Lin',
                  designation: 'Technology Director',
              },
              {
                  id: 2,
                  img: 'https://images.pexels.com/photos/5060991/pexels-photo-5060991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  name: 'Katy Lin',
                  designation: 'Finance Director',
              },
              {
                  id: 3,
                    img: 'https://images.pexels.com/photos/4098283/pexels-photo-4098283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  name: 'Katy Lin',
                  designation: 'Development Director Global',
              },
              {
                  id: 4,
                  img: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  name: 'Katy Lin',
                  designation: 'Chief Technology & Fintech Advisor',
              },
    ]
        }
    }
}
</script>
<style lang="">
    
</style>