<template lang="">
    <div class="relative py-16 lg:py-24 ">
        <!-- team wrapper start   -->
        <div class="container">
            <!-- Top start  -->
            <div class="flex justify-between flex-col lg:flex-row items-center">
                <!-- left start -->
                <div class=" lg:w-2/4 text-center lg:text-left">
                    <h2 class=" text-5xl  md:text-[122px] leading-tight  text-gray-800 capitalize  font-primary-medium " >Leading <br class="hidden lg:block">  the way</h2>
                    <p class=" text-lg  md:text-[26px] leading-normal  my-8   lg:my-24 text-gray-800 font-secondary-regular  lg:max-w-2xl" >
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
      listofPeople: [{
          id: 1,
          img: '1.png',
          name: 'Katy Lin',
          designation: 'Chief Executive  Officer',
        },
        {
          id: 2,
          img: '2.png',
          name: 'Katy Lin',
          designation: 'Chief Executive  Officer',
        },
      ],
      listofMember: [{
          id: 1,
          img: '3.png',
          name: 'Katy Lin',
          designation: 'Technology Director',
        },
        {
          id: 2,
          img: '4.png',
          name: 'Katy Lin',
          designation: 'Finance Director',
        },
        {
          id: 3,
          img: '5.png',
          name: 'Katy Lin',
          designation: 'Development Director Global',
        },
        {
          id: 4,
          img: '6.png',
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
